use anyhow::{anyhow, Context};
use clap::Parser;
use cli_table::{print_stdout, Cell, Table};
use config::{builder::DefaultState, ConfigBuilder};
use std::collections::HashMap;

use crate::{
    commands::client_builder_with_fallback_genesis_key, configuration::ConfigParameters,
    utils::ExpanderUtils,
};
use mithril_client::MithrilResult;

/// Clap command to show a given Cardano transaction sets
#[derive(Parser, Debug, Clone)]
pub struct CardanoTransactionsSetsShowCommand {
    /// Enable JSON output.
    #[clap(long)]
    json: bool,

    /// Cardano transaction sets hash.
    ///
    /// If `latest` is specified as hash, the command will return the latest Cardano transaction sets.
    hash: String,
}

impl CardanoTransactionsSetsShowCommand {
    /// Cardano transaction sets Show command
    pub async fn execute(&self, config_builder: ConfigBuilder<DefaultState>) -> MithrilResult<()> {
        let config = config_builder.build()?;
        let params = ConfigParameters::new(config.try_deserialize::<HashMap<String, String>>()?);
        let client = client_builder_with_fallback_genesis_key(&params)?.build()?;

        let get_list_of_artifact_ids = || async {
            let transactions_sets = client.cardano_transaction_proof().list().await.with_context(|| {
                "Can not get the list of artifacts while retrieving the latest Cardano transaction sets hash"
            })?;

            Ok(transactions_sets
                .iter()
                .map(|tx_sets| tx_sets.hash.to_owned())
                .collect::<Vec<String>>())
        };

        let tx_sets = client
            .cardano_transaction_proof()
            .get(
                &ExpanderUtils::expand_eventual_id_alias(&self.hash, get_list_of_artifact_ids())
                    .await?,
            )
            .await?
            .ok_or_else(|| {
                anyhow!(
                    "Cardano transaction sets not found for hash: '{}'",
                    &self.hash
                )
            })?;

        if self.json {
            println!("{}", serde_json::to_string(&tx_sets)?);
        } else {
            let transaction_sets_table = vec![
                vec!["Epoch".cell(), format!("{}", &tx_sets.beacon.epoch).cell()],
                vec![
                    "Immutable File Number".cell(),
                    format!("{}", &tx_sets.beacon.immutable_file_number).cell(),
                ],
                vec!["Network".cell(), tx_sets.beacon.network.cell()],
                vec!["Merkle Root".cell(), tx_sets.merkle_root.to_string().cell()],
                vec![
                    "Certificate Hash".cell(),
                    tx_sets.certificate_hash.to_string().cell(),
                ],
                vec!["Hash".cell(), tx_sets.hash.cell()],
                vec!["Created".cell(), tx_sets.created_at.to_string().cell()],
            ]
            .table();

            print_stdout(transaction_sets_table)?
        }

        Ok(())
    }
}
