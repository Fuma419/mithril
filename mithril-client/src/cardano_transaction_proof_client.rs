//! A client to retrieve from an aggregator cryptographic proofs of membership for a subset of Cardano transactions.
//!
//! In order to do so it defines a [CardanoTransactionProofClient] which exposes the following features:
//!  - [get_proofs][CardanoTransactionProofClient::get_proofs]: get a [cryptographic proof][CardanoTransactionsProofs]
//! that the transactions with given hash are included in the global Cardano transactions set.
//!  - [get][CardanoTransactionProofClient::get]: get a [Cardano transaction commitment][CardanoTransactionCommitment]
//! data from its hash.
//!  - [list][CardanoTransactionProofClient::list]: get the list of the latest available Cardano transaction
//! commitments.
//!
//!  **Important:** Verifying a proof **only** means that its cryptography is valid, in order to certify that a Cardano
//! transactions subset is valid, the associated proof must be tied to a valid Mithril certificate (see the example below).
//!
//! # Get and verify Cardano transaction proof
//!
//! To get and verify a Cardano transaction proof using the [ClientBuilder][crate::client::ClientBuilder].
//!
//! ```no_run
//! # async fn run() -> mithril_client::MithrilResult<()> {
//! use mithril_client::{ClientBuilder, MessageBuilder};
//!
//! let client = ClientBuilder::aggregator("YOUR_AGGREGATOR_ENDPOINT", "YOUR_GENESIS_VERIFICATION_KEY").build()?;
//!
//! // 1 - Get a proof from the aggregator and verify it
//! let cardano_transaction_proof = client.cardano_transaction_proof().get_proofs(&["tx-1", "tx-2"]).await?;
//! println!("Mithril could not certify the following transactions : {:?}", &cardano_transaction_proof.non_certified_transactions);
//!
//! let verified_transactions = cardano_transaction_proof.verify()?;
//!
//! // 2 - Verify its associated certificate chain
//! let certificate = client.certificate().verify_chain(&cardano_transaction_proof.certificate_hash).await?;
//!
//! // 3 - Ensure that the proof is indeed signed in the associated certificate
//! let message = MessageBuilder::new().compute_cardano_transactions_proofs_message(&certificate, &verified_transactions);
//! if certificate.match_message(&message) {
//!     // All green, Mithril certifies that those transactions are part of the Cardano transactions set.
//!     println!("Certified transactions : {:?}", verified_transactions.certified_transactions());
//! }
//! #    Ok(())
//! # }
//! ```
//!
//! # Get a Cardano transaction commitment
//!
//! To get a Cardano transaction commitment using the [ClientBuilder][crate::client::ClientBuilder].
//!
//! ```no_run
//! # async fn run() -> mithril_client::MithrilResult<()> {
//! use mithril_client::ClientBuilder;
//!
//! let client = ClientBuilder::aggregator("YOUR_AGGREGATOR_ENDPOINT", "YOUR_GENESIS_VERIFICATION_KEY").build()?;
//! let cardano_transaction_commitment = client.cardano_transaction_proof().get("CARDANO_TRANSACTION_COMMITMENT_HASH").await?.unwrap();
//!
//! println!("Cardano transaction commitment hash={}, epoch={}", cardano_transaction_commitment.hash, cardano_transaction_commitment.beacon.epoch);
//! #    Ok(())
//! # }
//! ```
//!
//! # List available Cardano transaction commitments
//!
//! To list latest available Cardano transaction commitments using the [ClientBuilder][crate::client::ClientBuilder].
//!
//! ```no_run
//! # async fn run() -> mithril_client::MithrilResult<()> {
//! use mithril_client::ClientBuilder;
//!
//! let client = ClientBuilder::aggregator("YOUR_AGGREGATOR_ENDPOINT", "YOUR_GENESIS_VERIFICATION_KEY").build()?;
//! let cardano_transaction_commitments = client.cardano_transaction_proof().list().await?;
//!
//! for cardano_transaction_commitment in cardano_transaction_commitments {
//!     println!("Cardano transaction commitment hash={}, epoch={}", cardano_transaction_commitment.hash, cardano_transaction_commitment.beacon.epoch);
//! }
//! #    Ok(())
//! # }
//! ```

use crate::aggregator_client::{AggregatorClient, AggregatorClientError, AggregatorRequest};
use crate::{
    CardanoTransactionCommitment, CardanoTransactionCommitmentListItem, CardanoTransactionsProofs,
    MithrilResult,
};
use anyhow::Context;
use std::sync::Arc;

/// HTTP client for CardanoTransactionsAPI from the Aggregator
pub struct CardanoTransactionProofClient {
    aggregator_client: Arc<dyn AggregatorClient>,
}

impl CardanoTransactionProofClient {
    /// Constructs a new `CardanoTransactionProofClient`.
    pub fn new(aggregator_client: Arc<dyn AggregatorClient>) -> Self {
        Self { aggregator_client }
    }

    /// Get proofs that the given subset of transactions is included in the Cardano transactions set.
    pub async fn get_proofs<T: ToString>(
        &self,
        transactions_hashes: &[T],
    ) -> MithrilResult<CardanoTransactionsProofs> {
        match self
            .aggregator_client
            .get_content(AggregatorRequest::GetTransactionsProofs {
                transactions_hashes: transactions_hashes.iter().map(|h| h.to_string()).collect(),
            })
            .await
        {
            Ok(content) => {
                let transactions_proofs: CardanoTransactionsProofs = serde_json::from_str(&content)
                    .with_context(|| {
                        "CardanoTransactionProof Client can not deserialize transactions proofs"
                    })?;

                Ok(transactions_proofs)
            }
            Err(e) => Err(e.into()),
        }
    }

    /// Fetch a list of signed Cardano transaction commitments.
    pub async fn list(&self) -> MithrilResult<Vec<CardanoTransactionCommitmentListItem>> {
        let response = self
            .aggregator_client
            .get_content(AggregatorRequest::ListCardanoTransactionCommitments)
            .await
            .with_context(|| {
                "CardanoTransactionProofClient Client can not get the artifact list"
            })?;
        let items = serde_json::from_str::<Vec<CardanoTransactionCommitmentListItem>>(&response)
            .with_context(|| {
                "CardanoTransactionProofClient Client can not deserialize artifact list"
            })?;

        Ok(items)
    }

    /// Get the given Cardano transaction commitment data. If it cannot be found, a None is returned.
    pub async fn get(&self, hash: &str) -> MithrilResult<Option<CardanoTransactionCommitment>> {
        match self
            .aggregator_client
            .get_content(AggregatorRequest::GetCardanoTransactionCommitment {
                hash: hash.to_string(),
            })
            .await
        {
            Ok(content) => {
                let cardano_transaction_commitment: CardanoTransactionCommitment =
                    serde_json::from_str(&content).with_context(|| {
                        "CardanoTransactionProofClient Client can not deserialize artifact"
                    })?;

                Ok(Some(cardano_transaction_commitment))
            }
            Err(AggregatorClientError::RemoteServerLogical(_)) => Ok(None),
            Err(e) => Err(e.into()),
        }
    }
}

#[cfg(test)]
mod tests {
    use crate::aggregator_client::{AggregatorClientError, MockAggregatorHTTPClient};
    use crate::common::Beacon;
    use crate::{
        CardanoTransactionCommitment, CardanoTransactionCommitmentListItem,
        CardanoTransactionsProofs, CardanoTransactionsSetProof,
    };
    use anyhow::anyhow;
    use chrono::{DateTime, Utc};
    use std::sync::Arc;

    use super::*;

    fn fake_messages() -> Vec<CardanoTransactionCommitmentListItem> {
        vec![
            CardanoTransactionCommitmentListItem {
                merkle_root: "mk-123".to_string(),
                beacon: Beacon::new("network".to_string(), 1, 1),
                hash: "hash-123".to_string(),
                certificate_hash: "cert-hash-123".to_string(),
                created_at: DateTime::parse_from_rfc3339("2023-01-19T13:43:05.618857482Z")
                    .unwrap()
                    .with_timezone(&Utc),
            },
            CardanoTransactionCommitmentListItem {
                merkle_root: "mk-456".to_string(),
                beacon: Beacon::new("network".to_string(), 1, 2),
                hash: "hash-456".to_string(),
                certificate_hash: "cert-hash-456".to_string(),
                created_at: DateTime::parse_from_rfc3339("2023-01-19T13:43:05.618857482Z")
                    .unwrap()
                    .with_timezone(&Utc),
            },
        ]
    }

    #[tokio::test]
    async fn get_cardano_transaction_commitment_list() {
        let message = fake_messages();
        let mut http_client = MockAggregatorHTTPClient::new();
        http_client
            .expect_get_content()
            .return_once(move |_| Ok(serde_json::to_string(&message).unwrap()));
        let client = CardanoTransactionProofClient::new(Arc::new(http_client));
        let items = client.list().await.unwrap();

        assert_eq!(2, items.len());
        assert_eq!("hash-123".to_string(), items[0].hash);
        assert_eq!("hash-456".to_string(), items[1].hash);
    }

    #[tokio::test]
    async fn get_cardano_transaction_commitment() {
        let mut http_client = MockAggregatorHTTPClient::new();
        let message = CardanoTransactionCommitment {
            merkle_root: "mk-123".to_string(),
            beacon: Beacon::new("network".to_string(), 1, 1),
            hash: "hash-123".to_string(),
            certificate_hash: "cert-hash-123".to_string(),
            created_at: DateTime::parse_from_rfc3339("2023-01-19T13:43:05.618857482Z")
                .unwrap()
                .with_timezone(&Utc),
        };
        let expected = message.clone();
        http_client
            .expect_get_content()
            .return_once(move |_| Ok(serde_json::to_string(&message).unwrap()));
        let client = CardanoTransactionProofClient::new(Arc::new(http_client));
        let cardano_transaction_commitment = client
            .get("hash")
            .await
            .unwrap()
            .expect("This test returns a cardano transaction commitment");

        assert_eq!(expected, cardano_transaction_commitment);
    }

    #[tokio::test]
    async fn test_get_proof_ok() {
        let mut aggregator_client = MockAggregatorHTTPClient::new();
        let certificate_hash = "cert-hash-123".to_string();
        let set_proof = CardanoTransactionsSetProof::dummy();
        let transactions_proofs =
            CardanoTransactionsProofs::new(&certificate_hash, vec![set_proof.clone()], vec![]);
        let expected_transactions_proofs = transactions_proofs.clone();
        aggregator_client
            .expect_get_content()
            .return_once(move |_| Ok(serde_json::to_string(&transactions_proofs).unwrap()))
            .times(1);

        let cardano_tx_client = CardanoTransactionProofClient::new(Arc::new(aggregator_client));
        let transactions_proofs = cardano_tx_client
            .get_proofs(
                &set_proof
                    .transactions_hashes
                    .iter()
                    .map(|h| h.as_str())
                    .collect::<Vec<_>>(),
            )
            .await
            .unwrap();

        assert_eq!(expected_transactions_proofs, transactions_proofs);
    }

    #[tokio::test]
    async fn test_get_proof_ko() {
        let mut aggregator_client = MockAggregatorHTTPClient::new();
        aggregator_client
            .expect_get_content()
            .return_once(move |_| {
                Err(AggregatorClientError::RemoteServerTechnical(anyhow!(
                    "an error"
                )))
            })
            .times(1);

        let cardano_tx_client = CardanoTransactionProofClient::new(Arc::new(aggregator_client));
        cardano_tx_client
            .get_proofs(&["tx-123"])
            .await
            .expect_err("The certificate client should fail here.");
    }
}
