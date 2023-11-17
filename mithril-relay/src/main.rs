use anyhow::anyhow;
use clap::{Parser, ValueEnum};
use libp2p::Multiaddr;
use mithril_common::StdResult;
use mithril_relay::{
    client::P2PClient, relay_aggregator::AggregatorRelay, relay_signer::SignerRelay,
};
use slog::{Drain, Level, Logger};
use slog_scope::error;
use std::sync::Arc;

#[derive(Parser, Debug, PartialEq, Clone)]
pub struct Config {
    /// Node type (relay or client)
    #[clap(long, env = "NODE_TYPE")]
    #[arg(value_enum)]
    node_type: NodeType,

    /// HTTP Server listening port
    #[clap(long, env = "SERVER_PORT", default_value_t = 3132)]
    server_port: u16,

    /// Peer listening port
    #[clap(long, env = "LISTEN_PORT")]
    listen_port: Option<u16>,

    /// Dial to peer multi-address
    #[clap(long, env = "DIAL_TO")]
    dial_to: Option<Multiaddr>,

    /// Aggregator endpoint URL.
    #[clap(long, env = "AGGREGATOR_ENDPOINT")]
    aggregator_endpoint: Option<String>,

    /// Verbosity level (-v=warning, -vv=info, -vvv=debug).
    #[clap(short, long, action = clap::ArgAction::Count)]
    verbose: u8,
}

impl Config {
    fn log_level(&self) -> Level {
        match self.verbose {
            0 => Level::Warning,
            1 => Level::Info,
            2 => Level::Debug,
            _ => Level::Trace,
        }
    }

    fn build_logger(&self) -> Logger {
        let decorator = slog_term::TermDecorator::new().build();
        let drain = slog_term::CompactFormat::new(decorator).build().fuse();
        let drain = slog::LevelFilter::new(drain, self.log_level()).fuse();
        let drain = slog_async::Async::new(drain).build().fuse();

        Logger::root(Arc::new(drain), slog::o!())
    }
}

#[derive(Debug, Copy, Clone, PartialEq, Eq, PartialOrd, Ord, ValueEnum)]
enum NodeType {
    Signer,
    Aggregator,
    Passive,
}

#[tokio::main]
async fn main() -> StdResult<()> {
    let config = Config::parse();

    let _guard = slog_scope::set_global_logger(config.build_logger());

    let node_type = config.node_type;
    let server_port = config.server_port;
    let dial_to = config.dial_to;
    let addr: Multiaddr =
        format!("/ip4/0.0.0.0/tcp/{}", config.listen_port.unwrap_or(0)).parse()?;
    let aggregator_endpoint = config.aggregator_endpoint;

    match node_type {
        NodeType::Signer => {
            let aggregator_endpoint =
                aggregator_endpoint.ok_or(anyhow!("an aggregator endpoint must be specified"))?;
            let mut relay = SignerRelay::start(&addr, &server_port, &aggregator_endpoint).await?;
            if let Some(dial_to_address) = dial_to {
                relay.dial_peer(dial_to_address.clone())?;
            }
            loop {
                if let Err(err) = relay.tick().await {
                    error!("RelaySigner: tick error"; "error" => format!("{err:#?}"));
                }
            }
        }
        NodeType::Aggregator => {
            let aggregator_endpoint =
                aggregator_endpoint.ok_or(anyhow!("an aggregator endpoint must be specified"))?;
            let mut relay = AggregatorRelay::start(&addr, &aggregator_endpoint).await?;
            if let Some(dial_to_address) = dial_to {
                relay.dial_peer(dial_to_address.clone())?;
            }
            loop {
                if let Err(err) = relay.tick().await {
                    error!("RelayAggregator: tick error"; "error" => format!("{err:#?}"));
                }
            }
        }
        NodeType::Passive => {
            let mut p2p_client = P2PClient::new(&addr).start().await?;
            if let Some(dial_to_address) = dial_to {
                p2p_client.dial_peer(dial_to_address.clone())?;
            }
            loop {
                if let Err(err) = p2p_client.tick().await {
                    error!("P2PClient: tick error"; "error" => format!("{err:#?}"));
                }
            }
        }
    }
}
