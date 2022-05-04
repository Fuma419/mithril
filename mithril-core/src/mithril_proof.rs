//! Prove the validity of aggregated signatures.

use crate::merkle_tree::{concat_avk_with_msg, MerkleTreeCommitment, Path};
use crate::msp::{Msp, MspMvk, MspSig};
use crate::proof::Proof;
use crate::stm::{ev_lt_phi, Index, MTValue, StmParameters, StmSig};
use digest::{Digest, FixedOutput};
use std::collections::HashSet;
use std::sync::Arc;

/// The statement we want to prove, namely that
/// the signature aggregated by our scheme with
/// the given MerkleTree, aggregated verification keys,
/// and aggregated signatures is valid for the
/// given message.
pub struct MithrilStatement<D: Digest + FixedOutput> {
    // We use Arc here to avoid exposing a lifetime parameter being thread-safe.
    // Parameterizing Statement by a lifetime ends up bubbling the lifetime to whoever is
    // producing proofs, effectively tying the lifetime of the proof to that of
    // the prover, which is undesirable.
    pub(crate) avk: Arc<MerkleTreeCommitment<D>>,
    pub(crate) ivk: MspMvk,
    pub(crate) mu: MspSig,
    pub(crate) msg: Vec<u8>,
    pub(crate) params: StmParameters,
    pub(crate) total_stake: u64,
}

/// A MithrilWitness is an aggregation of signatures
#[derive(Debug, Clone)]
pub struct MithrilWitness<D: Clone + Digest + FixedOutput> {
    pub(crate) sigs: Vec<StmSig<D>>,
    pub(crate) indices: Vec<Index>,
    pub(crate) evals: Vec<[u8; 64]>,
}

/// Errors which can be output by Mithril verification.
#[derive(Debug, Clone, thiserror::Error)]
pub enum MithrilWitnessError<D: Digest + FixedOutput> {
    /// No quorum was found
    #[error("No Quorum was found.")]
    NoQuorum,
    /// The IVK is invalid after aggregating the keys
    #[error("Aggregated key does not correspond to the expected key.")]
    IvkInvalid(MspMvk),
    /// Mu is not the sum of the signatures
    #[error("Aggregated signature does not correspond to the expected signature.")]
    SumInvalid(MspSig),
    /// There is an index out of bounds
    #[error("Received index, {0}, is higher than what the security parameter allows, {1}.")]
    IndexBoundFailed(u64, u64),
    /// There is a duplicate index
    #[error("Indeces are not unique.")]
    IndexNotUnique,
    /// The path is not valid for the Merkle Tree
    #[error("The path of the Merkle Tree is invalid.")]
    PathInvalid(Path<D>),
    /// MSP.Eval was computed incorrectly
    #[error("The claimed evaluation of function phi is incorrect.")]
    EvalInvalid([u8; 64]),
    /// A party did not actually win the lottery
    #[error("The current party did not win the lottery.")]
    StakeInvalid,
}

#[allow(clippy::from_over_into)]
impl<D: Digest + FixedOutput> Into<i64> for MithrilWitnessError<D> {
    fn into(self) -> i64 {
        // -1 is reserved to the function failing.
        match self {
            MithrilWitnessError::NoQuorum => -2,
            MithrilWitnessError::IvkInvalid(_) => -3,
            MithrilWitnessError::SumInvalid(_) => -4,
            MithrilWitnessError::IndexBoundFailed(_, _) => -5,
            MithrilWitnessError::IndexNotUnique => -6,
            MithrilWitnessError::PathInvalid(_) => -7,
            MithrilWitnessError::EvalInvalid(_) => -8,
            MithrilWitnessError::StakeInvalid => -9,
        }
    }
}

impl<D: Clone + Digest + FixedOutput> MithrilWitness<D> {
    fn verify(&self, stmt: &MithrilStatement<D>) -> Result<(), MithrilWitnessError<D>> {
        self.check_quorum(stmt.params.k as usize)?;
        self.check_ivk(&stmt.ivk)?;
        self.check_sum(&stmt.mu)?;
        self.check_index_bound(stmt.params.m)?;
        self.check_index_unique()?;
        self.check_path(&stmt.avk)?;
        self.check_eval(&stmt.avk, &stmt.msg)?;
        self.check_stake(stmt.params.phi_f, stmt.total_stake)?;
        Ok(())
    }

    /// ivk = Prod(1..k, mvk[i])
    fn check_ivk(&self, ivk: &MspMvk) -> Result<(), MithrilWitnessError<D>> {
        let mvks = self.sigs.iter().map(|s| s.pk.mvk).collect::<Vec<_>>();
        let sum = Msp::aggregate_keys(&mvks).0;
        if ivk.0 != sum {
            return Err(MithrilWitnessError::IvkInvalid(MspMvk(sum)));
        }
        Ok(())
    }

    /// mu = Prod(1..k, sigma[i])
    fn check_sum(&self, mu: &MspSig) -> Result<(), MithrilWitnessError<D>> {
        let mu1: MspSig =
            Msp::aggregate_sigs(&self.sigs.iter().map(|s| s.sigma).collect::<Vec<MspSig>>());
        if mu != &mu1 {
            return Err(MithrilWitnessError::SumInvalid(mu1));
        }
        Ok(())
    }

    /// \forall i. index[i] <= m
    fn check_index_bound(&self, m: u64) -> Result<(), MithrilWitnessError<D>> {
        for &i in self.indices.iter() {
            if i > m {
                return Err(MithrilWitnessError::IndexBoundFailed(i, m));
            }
        }
        Ok(())
    }

    /// \forall i. \forall j. (i == j || index[i] != index[j])
    fn check_index_unique(&self) -> Result<(), MithrilWitnessError<D>> {
        if self
            .indices
            .iter()
            .cloned()
            .collect::<HashSet<Index>>()
            .len()
            != self.indices.len()
        {
            return Err(MithrilWitnessError::IndexNotUnique);
        }
        Ok(())
    }

    /// k-sized quorum
    /// if this returns `true`, then there are exactly k signatures
    fn check_quorum(&self, k: usize) -> Result<(), MithrilWitnessError<D>> {
        if !(k == self.sigs.len() && k == self.evals.len() && k == self.indices.len()) {
            return Err(MithrilWitnessError::NoQuorum);
        }
        Ok(())
    }

    /// \forall i : [0..k]. path[i] is a witness for (mvk[i]), stake[i] in avk
    fn check_path(&self, avk: &MerkleTreeCommitment<D>) -> Result<(), MithrilWitnessError<D>> {
        for sig in self.sigs.iter() {
            if avk
                .check(&MTValue(sig.pk.mvk, sig.stake).to_bytes(), &sig.path)
                .is_err()
            {
                return Err(MithrilWitnessError::PathInvalid(sig.path.clone()));
            }
        }
        Ok(())
    }

    /// \forall i : [1..k]. ev[i] = MSP.Eval(msg, index[i], sig[i])
    fn check_eval(
        &self,
        avk: &MerkleTreeCommitment<D>,
        msg: &[u8],
    ) -> Result<(), MithrilWitnessError<D>> {
        let msp_evals = self.indices.iter().zip(self.sigs.iter()).map(|(idx, sig)| {
            let msgp = concat_avk_with_msg(avk, msg);
            Msp::eval(&msgp, *idx, &sig.sigma)
        });

        for (&ev, msp_e) in self.evals.iter().zip(msp_evals) {
            if ev != msp_e {
                return Err(MithrilWitnessError::EvalInvalid(ev));
            }
        }
        Ok(())
    }

    /// \forall i : [1..k]. ev[i] <= phi(stake_i)
    fn check_stake(&self, phi_f: f64, total_stake: u64) -> Result<(), MithrilWitnessError<D>> {
        if !self
            .evals
            .iter()
            .zip(&self.sigs)
            .all(|(ev, sig)| ev_lt_phi(phi_f, *ev, sig.stake, total_stake))
        {
            return Err(MithrilWitnessError::StakeInvalid);
        }
        Ok(())
    }
}

// impl<H> ToBytes for MithrilWitness<H>
// where
//     PE: PairingEngine,
//     H: MTHashLeaf<MTValue>,
//     H::F: ToBytes,
// {
//     fn write<W: Write>(&self, mut writer: W) -> std::io::Result<()> {
//         let n: u64 = self.sigs.len().try_into().unwrap();
//         n.write(&mut writer)?;
//         self.sigs.write(&mut writer)?;
//         self.indices.write(&mut writer)?;
//         self.evals.write(&mut writer)
//     }
// }
// impl<H> FromBytes for MithrilWitness<H>
// where
//     PE: PairingEngine,
//     H: MTHashLeaf<MTValue>,
//     H::F: FromBytes,
// {
//     fn read<R: Read>(mut reader: R) -> std::io::Result<Self> {
//         let n = u64::read(&mut reader)?;
//         let mut sigs: Vec<StmSig<H::F>> = Vec::with_capacity(n as usize);
//         let mut indices: Vec<Index> = Vec::with_capacity(n as usize);
//         let mut evals: Vec<[u8; 64]> = Vec::with_capacity(n as usize);
//         for _ in 0..n {
//             let s = StmSig::<H::F>::read(&mut reader)?;
//             sigs.push(s);
//         }
//         for _ in 0..n {
//             let idx = Index::read(&mut reader)?;
//             indices.push(idx);
//         }
//         let mut ev = [0u8; 64];
//         for _ in 0..n {
//             reader.read_exact(&mut ev)?;
//             evals.push(ev);
//         }
//
//         Ok(MithrilWitness {
//             sigs,
//             indices,
//             evals,
//         })
//     }
// }

/// A MithrilProof just fixes the relation to a constant.
pub trait MithrilProof: Proof {
    /// The relation is a constant.
    const RELATION: Self::Relation;
}

pub mod concat_proofs {
    //! This is the trivial proof system instantiated to Mithril: witnesses are
    //! just the aggregated signatures themselves.
    use super::{MithrilProof, MithrilStatement, MithrilWitness, MithrilWitnessError};
    use crate::proof::trivial::TrivialProof;
    pub use crate::proof::trivial::{TrivialEnv, TrivialError};
    use digest::{Digest, FixedOutput};
    use std::fmt::Debug;

    /// Set the env to the TrivialEnv.
    pub type ConcatEnv = TrivialEnv;
    /// The relation is a function outputting an error or not.
    pub type ConcatRel<D> =
        fn(&MithrilStatement<D>, &MithrilWitness<D>) -> Result<(), MithrilWitnessError<D>>;
    /// The proof is a TrivialProof.
    pub type ConcatProof<D> = TrivialProof<MithrilStatement<D>, ConcatRel<D>, MithrilWitness<D>>;

    impl<D> MithrilProof for ConcatProof<D>
    where
        D: Clone + Digest + Debug + FixedOutput,
    {
        const RELATION: ConcatRel<D> = trivial_relation;
    }

    // impl<H> ToBytes for ConcatProof<H>
    // where
    //     H: MTHashLeaf,
    // {
    //     fn write<W: Write>(&self, writer: W) -> std::io::Result<()> {
    //         self.witness.write(writer)
    //     }
    // }
    //
    // impl<H> FromBytes for ConcatProof<H>
    // where
    //     H: MTHashLeaf,
    // {
    //     fn read<R: Read>(reader: R) -> std::io::Result<Self> {
    //         let witness = MithrilWitness::<H>::read(reader)?;
    //
    //         Ok(TrivialProof::new(witness))
    //     }
    // }

    fn trivial_relation<D>(
        s: &MithrilStatement<D>,
        w: &MithrilWitness<D>,
    ) -> Result<(), MithrilWitnessError<D>>
    where
        D: Clone + Digest + FixedOutput,
    {
        w.verify(s)
    }
}
