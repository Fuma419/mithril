"use strict";(self.webpackChunkmithril_doc=self.webpackChunkmithril_doc||[]).push([[4140],{51542:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var r=n(74848),t=n(28453);const s={sidebar_position:3,sidebar_label:"Mithril Threat Model"},a="Mithril Threat Model",o={id:"mithril/threat-model",title:"Mithril Threat Model",description:"This document is a draft version of the Mithril threat model prepared by the Mithril core team:",source:"@site/root/mithril/threat-model.md",sourceDirName:"mithril",slug:"/mithril/threat-model",permalink:"/doc/next/mithril/threat-model",draft:!1,unlisted:!1,editUrl:"https://github.com/input-output-hk/mithril/edit/main/docs/website/root/mithril/threat-model.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Mithril Threat Model"},sidebar:"mithrilSideBar",previous:{title:"Mithril client",permalink:"/doc/next/mithril/mithril-network/client"}},l={},h=[{value:"System analysis",id:"system-analysis",level:2},{value:"System description",id:"system-description",level:3},{value:"Deployment architecture",id:"deployment-architecture",level:4},{value:"External Dependencies",id:"external-dependencies",level:3},{value:"Entry Points",id:"entry-points",level:3},{value:"Assumptions",id:"assumptions",level:2},{value:"Assets",id:"assets",level:2},{value:"KES private keys",id:"kes-private-keys",level:4},{value:"Block diffusion",id:"block-diffusion",level:4},{value:"Block production",id:"block-production",level:4},{value:"Cardano Chain database",id:"cardano-chain-database",level:4},{value:"Cardano Ledger state",id:"cardano-ledger-state",level:4},{value:"Mithril signing keys",id:"mithril-signing-keys",level:4},{value:"Mithril signer registration",id:"mithril-signer-registration",level:4},{value:"Mithril signatures diffusion",id:"mithril-signatures-diffusion",level:4},{value:"Mithril protocol parameters",id:"mithril-protocol-parameters",level:4},{value:"Mithril genesis signing key",id:"mithril-genesis-signing-key",level:4},{value:"Era configuration files",id:"era-configuration-files",level:4},{value:"Era activation",id:"era-activation",level:4},{value:"Era verification key",id:"era-verification-key",level:4},{value:"Era signing key",id:"era-signing-key",level:4},{value:"Client-side only assets",id:"client-side-only-assets",level:3},{value:"Mithril certificate verification process",id:"mithril-certificate-verification-process",level:4},{value:"Mithril certificates",id:"mithril-certificates",level:4},{value:"Mithril artifacts",id:"mithril-artifacts",level:4},{value:"Mithril genesis verification key",id:"mithril-genesis-verification-key",level:4},{value:"Threat &amp; Mitigations",id:"threat--mitigations",level:2},{value:"Resource exhaustion on Cardano relay",id:"resource-exhaustion-on-cardano-relay",level:3},{value:"Block diffusion exhaustion",id:"block-diffusion-exhaustion",level:4},{value:"Resource exhaustion on Cardano block producer",id:"resource-exhaustion-on-cardano-block-producer",level:3},{value:"Block production exhaustion",id:"block-production-exhaustion",level:4},{value:"Resource exhaustion on Mithril aggregator",id:"resource-exhaustion-on-mithril-aggregator",level:3},{value:"Integrity of the Cardano block producer database",id:"integrity-of-the-cardano-block-producer-database",level:3},{value:"References",id:"references",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"mithril-threat-model",children:"Mithril Threat Model"})}),"\n",(0,r.jsxs)(i.admonition,{type:"danger",children:[(0,r.jsxs)(i.p,{children:["This document is a draft version of the ",(0,r.jsx)(i.strong,{children:"Mithril threat model"})," prepared by the ",(0,r.jsx)(i.strong,{children:"Mithril core team"}),":"]}),(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["We expect to receive ",(0,r.jsx)(i.strong,{children:"external feedback and contributions"})," before we can consider it ",(0,r.jsx)(i.strong,{children:"final"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Feel free to ",(0,r.jsx)(i.strong,{children:"contribute"})," to this document by using the ",(0,r.jsx)(i.strong,{children:"Edit this page"})," link a the bottom of the page."]}),"\n",(0,r.jsxs)(i.li,{children:["If you think there is a security vulnerability in Mithril, please disclose it responsibly by following the ",(0,r.jsx)(i.a,{href:"https://github.com/input-output-hk/mithril/blob/main/SECURITY.md",children:"Security Vulnerability Disclosure Policy"}),"."]}),"\n"]})]}),"\n",(0,r.jsx)(i.p,{children:"This document provides an analysis of the various security threats and possible mitigations that could affect the Mithril network and its participants."}),"\n",(0,r.jsx)(i.p,{children:"This is an adversarial mindset document and aims to analyse the system from an attacker's perspective."}),"\n",(0,r.jsxs)(i.p,{children:["The threat model is a living document and is kept up-to-date with the ",(0,r.jsx)(i.a,{href:"https://github.com/input-output-hk/mithril/releases/latest",children:"latest Mithril version"})]}),"\n",(0,r.jsx)(i.h2,{id:"system-analysis",children:"System analysis"}),"\n",(0,r.jsx)(i.h3,{id:"system-description",children:"System description"}),"\n",(0,r.jsx)(i.admonition,{title:"To do",type:"info",children:(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Maybe reduce and move details into ",(0,r.jsx)(i.a,{href:"https://mithril.network/doc/mithril/mithril-network/architecture",children:"architecture page"}),"?"]}),"\n",(0,r.jsxs)(i.li,{children:["Also we should update the ",(0,r.jsx)(i.a,{href:"https://mithril.network/doc/mithril/mithril-protocol/protocol",children:"protocol page"})]}),"\n"]})}),"\n",(0,r.jsx)(i.p,{children:"System consists of three main components: signers, aggregator and clients."}),"\n",(0,r.jsxs)(i.p,{children:["Mithril signers do certify Cardano chain data using a Mithril signing key. That means, Mithril signers need access to a trusted ",(0,r.jsx)(i.code,{children:"cardano-node"})," and the Mithril signing key to operate."]}),"\n",(0,r.jsx)(i.p,{children:"Mithril signing keys are rotated every epoch and need to be certified by the Cardano KES key. For this, the Mithril signers need access to the KES key in order to register the signing key for this epoch."}),"\n",(0,r.jsxs)(i.p,{children:["Cardano KES keys are also used by block producing ",(0,r.jsx)(i.code,{children:"cardano-node"})," and are typically located on the block producing machine."]}),"\n",(0,r.jsxs)(i.p,{children:["Cardano KES keys need to be ",(0,r.jsx)(i.a,{href:"https://github.com/input-output-hk/cardano-node-wiki/blob/main/docs/stake-pool-operations/7_KES_period.md",children:"evolved every 36 hours"}),", while they can be rotated from a root key when needed."]}),"\n",(0,r.jsx)(i.admonition,{title:"To do",type:"info",children:(0,r.jsx)(i.p,{children:"Is there a Cardano threat model about this?"})}),"\n",(0,r.jsx)(i.p,{children:"All Mithril signers and Mithril clients connect to a single aggregator using HTTP over TLS."}),"\n",(0,r.jsx)(i.p,{children:"Registering a Mithril signing key means that a signer sends its corresponding verification key to the aggregator, for the purpose of distribution to all other Mithril signers."}),"\n",(0,r.jsx)(i.p,{children:"A Mithril aggregator coordinates creation of signatures by all registered signers. Mithril signers do ask the aggregator whether a signature is pending on a regular basis. The aggregator responds with information what to sign and a list of public information about all registered signers."}),"\n",(0,r.jsx)(i.p,{children:"Each Mithril signer verifies the information, produces a signature of the requested information to sign and submits that to the aggregator (which verifies the signature being correct upon receiving)."}),"\n",(0,r.jsx)(i.p,{children:"The aggregator repeatedly checks whether enough valid signatures (to reach the quorum) are available to aggregate a Mithril stake-based multi-signature into a certificate."}),"\n",(0,r.jsx)(i.p,{children:"Mithril certificates are certifying some chain data using an aggregated multi-signature verification key and are chained up to some genesis certificate, which is signed by a genesis signing key."}),"\n",(0,r.jsx)(i.p,{children:"Mithril clients do connect to an aggregator using HTTP over TLS to query Mithril certificates for certified chain data and locate artifacts."}),"\n",(0,r.jsxs)(i.p,{children:["A Mithril client can verify the received Mithril certificate is linked to other certificates up to the genesis certificate and can be verified using the Mithril genesis verification key (see ",(0,r.jsx)(i.a,{href:"https://mithril.network/doc/mithril/mithril-protocol/certificates/",children:"details"}),")."]}),"\n",(0,r.jsx)(i.admonition,{title:"To do",type:"info",children:(0,r.jsx)(i.p,{children:"Missing: the currently recommended relay (reverse proxy)"})}),"\n",(0,r.jsx)(i.h4,{id:"deployment-architecture",children:"Deployment architecture"}),"\n",(0,r.jsx)(i.p,{children:"This document is specifically targeting the standard deployment architecture where a Mithril signer runs next to the block producing node, while access to the Mithril aggregator is only done through a relay."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(80569).A+"",children:(0,r.jsx)(i.img,{alt:"Mithril - Architecture",src:n(26149).A+"",width:"1635",height:"1341"})})}),"\n",(0,r.jsx)(i.p,{children:"More information are available at:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://mithril.network/doc/mithril/mithril-network/architecture",children:"Mithril Network Architecture"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://mithril.network/doc/manual/getting-started/run-signer-node",children:"Run a Mithril signer as an SPO"})}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"external-dependencies",children:"External Dependencies"}),"\n",(0,r.jsx)(i.p,{children:"Listing dependencies for mithril-signer"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"% cargo-deps-list -e normal -p mithril-signer\n...\nslog-json v2.6.1 {default}\nslog-scope v4.4.0\narc-swap v1.6.0\n\nTotal dependencies: 267\n"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["SPOs infrastructure:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Block producing host configuration"}),"\n",(0,r.jsx)(i.li,{children:"Relay hosts configuration"}),"\n",(0,r.jsx)(i.li,{children:"Firewall/private network"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"entry-points",children:"Entry Points"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"mithril-aggregator HTTP port"}),"\n",(0,r.jsx)(i.li,{children:"mithril-relay HTTP port"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"assumptions",children:"Assumptions"}),"\n",(0,r.jsx)(i.p,{children:"The core Mithril protocol is considered safe and its analysis is out of scope for this document, it is computationally infeasible to:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Forge a valid aggregate signature from forged signing keys"}),"\n",(0,r.jsx)(i.li,{children:"Forge individual signatures impersonating one of the signers"}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["More information about the core Mithril protocol and its security are available in the ",(0,r.jsx)(i.a,{href:"https://iohk.io/en/research/library/papers/mithril-stake-based-threshold-multisignatures/",children:"research paper"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"assets",children:"Assets"}),"\n",(0,r.jsxs)(i.p,{children:["For each asset we first identify what protection is required: Availability, Confidentiality, Integrity ie. the ",(0,r.jsx)(i.a,{href:"https://www.splunk.com/en_us/blog/learn/cia-triad-confidentiality-integrity-availability.html",children:"CIA Triad"}),". An asset may be a resource, piece of data (e.g. keys) or a process that may be affected."]}),"\n",(0,r.jsx)(i.p,{children:"We then identify threats and countermeasures"}),"\n",(0,r.jsx)(i.h4,{id:"kes-private-keys",children:"KES private keys"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"KES key is present only on BP Node but needs to be shared with both the cardano-node process and the mithril-signer process"}),"\n",(0,r.jsx)(i.li,{children:"KES keys are needed by mithril-signer in order to sign verification key along with an operational certificate which authenticates the key from this stake pool id"}),"\n",(0,r.jsxs)(i.li,{children:["This signing happens at every epoch","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"confidentiality"}),": Yes (Capturing KES private keys allows an attacker to impersonate a registered SPO on-chain and produce blocks on his behalf until they are rotated)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"integrity"}),": Yes (Rotating a compromised KES key is a time-consuming process which can take place even if the associated KES period has not passed completely. See ",(0,r.jsx)(i.a,{href:"https://github.com/input-output-hk/cardano-node-wiki/blob/main/docs/stake-pool-operations/7_KES_period.md",children:"https://github.com/input-output-hk/cardano-node-wiki/blob/main/docs/stake-pool-operations/7_KES_period.md"}),")"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"availability"}),": Yes (If KES key is unavailable then signing cannot proceeed)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"block-diffusion",children:"Block diffusion"}),"\n",(0,r.jsx)(i.p,{children:'Block diffusion process ensures the timely diffusion of blocks, both those produced "locally" and those received from upstream peers'}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"confidentiality"}),": No (block diffusion happens in the open)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"integrity"}),": Yes (partially? not sure what integrity means here)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"availability"}),": Yes (Not being to diffuse blocks harms a BP's SPO economic viability, and can also harm their ability to create new blocks)"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"block-production",children:"Block production"}),"\n",(0,r.jsx)(i.p,{children:'Block production is the process of "minting" new blocks by block producers, driven by Stake-based random lottery.'}),"\n",(0,r.jsx)(i.p,{children:"The mithril-signer necessarily runs on the same host as a BP because it needs access to the KES signing key"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"confidentiality"}),": Yes? (BP schedule is private information for the BP, leaking it could provide adversaries advance knowledge of schedules and lead to ",(0,r.jsx)(i.strong,{children:"grinding attacks"})," to attempt to manipulate nonce in the disfavour of a BP ??)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"integrity"}),": Yes (incorrect or invalid data can hamper BP capabilities)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"availability"}),": Yes (BP is critical for SPOs revenue, and preventing a BP from producing blocks can harm SPOs capabilities to operate)"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"cardano-chain-database",children:"Cardano Chain database"}),"\n",(0,r.jsx)(i.p,{children:"A cardano-node maintains an on-disk database consisting of the chain's history. This database is updated by the node when new blocks are diffused through the network, or minted, and also contains a cache of the ledger state."}),"\n",(0,r.jsxs)(i.p,{children:["Mithril signer needs access to ",(0,r.jsx)(i.em,{children:"trusted"})," and ",(0,r.jsx)(i.em,{children:"up-to-date"})," Chain database in order to be able to sign snapshots."]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"confidentiality"}),": No (Data is public and replicated)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"integrity"}),": Yes"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"availability"}),": Yes"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"cardano-ledger-state",children:"Cardano Ledger state"}),"\n",(0,r.jsxs)(i.p,{children:["Access to an accurate ledger state is needed by Mithril signer to retrieve reliable ",(0,r.jsx)(i.em,{children:"Stake distribution"}),". This access is currently done through a local connection (direct w/ Pallas or indirect with cardano-cli) to a trusted cardano-node. The ledger state / stake distribution is also used by the cardano-node to determine leader schedules and hence corruption here has an impact on the block production process."]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"confidentiality"}),": No"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"integrity"}),": Yes (same, inaccurate SD will make key registration and signing process invalid)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"availability"}),": Yes (without SD, signer cannot register keys nor validly use other signers' keys)"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"mithril-signing-keys",children:"Mithril signing keys"}),"\n",(0,r.jsxs)(i.p,{children:["SPOs generate their Mithril signing keys every epoch to be able to sign snapshots. An attacker could impersonate the SPO and sign invalid snapshots if they got hold of those signing keys. Signing keys are currently stored temporarily on-disk as they are used ",(0,r.jsx)(i.code,{children:"2"})," epochs after their creation and deleted ",(0,r.jsx)(i.code,{children:"2"})," epochs after they have been used.\nTheir storage is not currently encrypted (Should probably be?)"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"confidentiality"}),": Yes (access to a signer's key will allow an attacker to impersonate a signer for the duration of the epoch)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"integrity"}),": Yes (invalid key is useless obviously)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"availability"}),": Yes (Signer needs Key at every signing round, unavailability will lead to inability to sign)"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"mithril-signer-registration",children:"Mithril signer registration"}),"\n",(0,r.jsx)(i.p,{children:"Mithril signer needs to register new verification key every epoch with aggregator (and ultimately other signers)."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"confidentiality"}),": No (only verification keys and proofs of possession, which are both public, are used in the signer registration)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"integrity"}),": Yes (partial? key registration process is transient and limited in time, but must be complete for a specific epoch)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"availability"}),": Yes (need access to aggregator to register key)"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"mithril-signatures-diffusion",children:"Mithril signatures diffusion"}),"\n",(0,r.jsx)(i.p,{children:"Mithril signers produces signatures every time a new message needs to be signed (e.g. when a new immutable file is created in the Chain DB). Those signatures are generated from a random lottery based on the signer's stake and the protocol parameters.\nPreventing Mithril signers from signing decreases the number of signatures and could allow attacker to take control of the produced snapshot"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"confidentiality"}),": No"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"integrity"}),": No (signatures are considered tamper-proof)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"availability"}),": Yes"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"mithril-protocol-parameters",children:"Mithril protocol parameters"}),"\n",(0,r.jsx)(i.p,{children:"Protocol parameters are needed to coordinate the production of valid multi-signatures. They are served by the aggregator"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"confidentiality"}),": No (they actually need to be public)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"integrity"}),": Yes (tampering protocol parameters can lead a signer to produce invalid signatures)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"availability"}),": Yes"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"mithril-genesis-signing-key",children:"Mithril genesis signing key"}),"\n",(0,r.jsx)(i.p,{children:"The corresponding signing key is stored in IOG's VaultWarden, and used only once, when the genesis certificate is generated."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"confidentiality"}),": Yes"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"integrity"}),": Yes (?)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"availability"}),": No (? The key is not needed unless a re-genesis process is required, but then a new key could be used instead?)"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"era-configuration-files",children:"Era configuration files"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.a,{href:"https://mithril.network/doc/adr/4",children:"Mithril Network Upgrade Strategy"})," ADR explains how Mithril eras are used to activate a feature on all the nodes of the network at a specific epoch boundary."]}),"\n",(0,r.jsxs)(i.p,{children:["The era reader Era address is used by signers to extract information about the current Mithril Era which defines the structure of snapshots and therefore signatures.\nIt is stored in ",(0,r.jsx)(i.a,{href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/release-mainnet/era.addr",children:"GitHub"})," and only modifiable through an approved merged PR"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"confidentiality"}),": No (they actually need to be public)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"integrity"}),": Yes (tampering the files could lead to Mithril network not being able to create multi-signatures)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"availability"}),": Yes"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"era-activation",children:"Era activation"}),"\n",(0,r.jsxs)(i.p,{children:["The current and next (if any) eras are announced on-chain with an era activation marker (see ADR ",(0,r.jsx)(i.a,{href:"https://mithril.network/doc/adr/4#era-activation-marker",children:"https://mithril.network/doc/adr/4#era-activation-marker"}),")."]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"confidentiality"}),": No (they actually need to be public)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"integrity"}),": Yes (tampering the era markers could lead to Mithril network not being able to create multi-signatures)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"availability"}),": Yes (era markers are currently stored on-chain)"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"era-verification-key",children:"Era verification key"}),"\n",(0,r.jsxs)(i.p,{children:["Era verification key is stored in ",(0,r.jsx)(i.a,{href:"https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/release-mainnet/era.vkey",children:"GitHub"})," and only modifiable through an approved merged PR."]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"confidentiality"}),": No"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"integrity"}),": No (integrity is inherent to the protocol)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"availability"}),": Yes (it's needed to verify a whole chain of certificate)"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"era-signing-key",children:"Era signing key"}),"\n",(0,r.jsx)(i.p,{children:"The corresponding signing key is stored in IOG's VaultWarden, and used only when a new era is announced or activated."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"confidentiality"}),": Yes"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"integrity"}),": Yes (?)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"availability"}),": No"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"client-side-only-assets",children:"Client-side only assets"}),"\n",(0,r.jsx)(i.p,{children:"These are the assets that are relevant only when downloading and verifying certificates and artifacts (aka snapshots)."}),"\n",(0,r.jsx)(i.h4,{id:"mithril-certificate-verification-process",children:"Mithril certificate verification process"}),"\n",(0,r.jsxs)(i.p,{children:["Mithril clients download snapshots and verify associated certificates using the mithril-client library, either from a CLI tool or ",(0,r.jsx)(i.a,{href:"https://mithril.network/explorer/",children:"embedded in a browser"})]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"confidentiality"}),": No"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"integrity"}),": No (the snapshots and certificates are assumed to be secure, integrity is inherent to the protocol)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"availability"}),": Yes (?)"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"mithril-certificates",children:"Mithril certificates"}),"\n",(0,r.jsx)(i.p,{children:"Mithril certificates are produced by the aggregator from the individual signatures. Mithril certificates' security rests upon a chain of trust ultimately pointing at the Genesis certificate.\nAt least one Mithril certificate must be produced during an epoch for the certificate chain to remain secure."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"confidentiality"}),": No"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"integrity"}),": No (The certificates are assumed to be secure, integrity is inherent to the protocol)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"availability"}),": No (Certificates are just a fallback, a Cardano node client can always retrieve the information from the Cardano network itself, albeit much more slowly)"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"mithril-artifacts",children:"Mithril artifacts"}),"\n",(0,r.jsx)(i.p,{children:"Mithril artifacts are produced by the aggregator specifically for the type of data being signed (e.g. a compressed snapshot archive of the Cardano node database). Mithril aggregator maintains artifacts to be served to clients."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"confidentiality"}),": No"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"integrity"}),": No (the snapshots are verified against their associated certificate to establish their authenticity)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"availability"}),": No (Artifacts are just a fallback, a Cardano node client can always retrieve the information from the Cardano network itself, albeit much more slowly)"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"mithril-genesis-verification-key",children:"Mithril genesis verification key"}),"\n",(0,r.jsxs)(i.p,{children:["Mithril genesis verification key is stored in ",(0,r.jsx)(i.a,{href:"https://github.com/input-output-hk/mithril/blob/main/mithril-infra/configuration/release-mainnet/genesis.vkey",children:"GitHub"})," and only modifiable through an approved merged PR"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"confidentiality"}),": No"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"integrity"}),": No (integrity is inherent to the protocol)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"availability"}),": Yes (it's needed to verify a whole chain of certificate)"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"threat--mitigations",children:"Threat & Mitigations"}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"This list of threat and mitigations is not exhaustive."}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"https://developers.cardano.org/docs/operate-a-stake-pool/hardening-server",children:"Developers portal"})," already provides thorough documentation on how to harden a linux-based host to run cardano-node ."]}),"\n"]})}),"\n",(0,r.jsx)(i.h3,{id:"resource-exhaustion-on-cardano-relay",children:"Resource exhaustion on Cardano relay"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["DoS of a ",(0,r.jsx)(i.code,{children:"mithril-signer"})," running next to a ",(0,r.jsx)(i.code,{children:"cardano-node"})," being a relay"]}),"\n",(0,r.jsxs)(i.li,{children:["Assets at risk:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#block-diffusion",children:"Block diffusion"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#mithril-signatures-diffusion",children:"Mithril signatures diffusion"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"block-diffusion-exhaustion",children:"Block diffusion exhaustion"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Diffusion is ensured through the connection between BPs, local relays, and downstream/upstream relays"}),"\n",(0,r.jsx)(i.li,{children:"preventing them to operate can harm the Cardano network"}),"\n",(0,r.jsx)(i.li,{children:"Relay hosts connect the BP to the network,"}),"\n",(0,r.jsx)(i.li,{children:"Starving relay hosts prevents Mithril signatures and key registration to be shared"}),"\n",(0,r.jsx)(i.li,{children:"Starving a cardano-node running on a relay host would prevent or delay the diffusion of new blocks thus harming"}),"\n",(0,r.jsx)(i.li,{children:"Compromising relay hosts would be an extreme form of starving resources"}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"resource-exhaustion-on-cardano-block-producer",children:"Resource exhaustion on Cardano block producer"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Assets at risk:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#block-production",children:"Block production"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"block-production-exhaustion",children:"Block production exhaustion"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["An incorrect mithril-signer could ",(0,r.jsx)(i.em,{children:"starve"})," the cardano-node of computing resources thus preventing it from producing and diffusing blocks in a timely manner"]}),"\n",(0,r.jsx)(i.li,{children:"Compromising BP host would harms a BP's SPO economic viability"}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"resource-exhaustion-on-mithril-aggregator",children:"Resource exhaustion on Mithril aggregator"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["DoS of a ",(0,r.jsx)(i.code,{children:"mithril-aggregator"})]}),"\n",(0,r.jsxs)(i.li,{children:["Assets at risk:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#mithril-signing-keys-registration",children:"Mithril signing keys registration"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#mithril-signatures-diffusion",children:"Mithril signatures diffusion"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#mithril-certificates",children:"Mithril certificates"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#mithril-artifacts",children:"Mithril artifacts"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"integrity-of-the-cardano-block-producer-database",children:"Integrity of the Cardano block producer database"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Data integrity of the Cardano block producer database compromised by action of the Mithril signer"}),"\n",(0,r.jsxs)(i.li,{children:["Assets at risk:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#block-production",children:"Block production"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#cardano-chain-database",children:"Cardano Chain database"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.li,{children:"Mitigation: give Mithril signer user read-only permissions to the database folder of the Cardano block producer"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://developers.cardano.org/docs/operate-a-stake-pool/",children:"SPO Guide"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://mithril.network/doc/mithril/mithril-network/architecture",children:"Mithril Network Architecture"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://mithril.network/doc/manual/getting-started/run-signer-node",children:"Run a Mithril signer as an SPO"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://iohk.io/en/research/library/papers/mithril-stake-based-threshold-multisignatures/",children:"Mithril: Stake-based Threshold Multisignatures"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://mithril.network/doc/adr/4",children:"Mithril Network Upgrade Strategy"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://owasp.org/www-community/Threat_Modeling_Process",children:"OWASP Threat Modelling Process"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://github.com/lnbook/lnbook/blob/develop/16_security_privacy_ln.asciidoc",children:"Lightning Book Security chapter"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://github.com/lnbook/lnbook/blob/develop/11_gossip_channel_graph.asciidoc",children:"Lightning Gossip Protocol"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://developer.hashicorp.com/consul/docs/security/security-models/core",children:"Consul Security Model"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://parallaxsecond.github.io/parsec-book/parsec_security/parsec_threat_model/threat_model.html",children:"Parsec Threat Model"})}),"\n",(0,r.jsxs)(i.li,{children:["A list of ",(0,r.jsx)(i.a,{href:"https://github.com/hysnsec/awesome-threat-modelling#threat-model-examples",children:"Threat Models"})]}),"\n",(0,r.jsxs)(i.li,{children:["there's even a ",(0,r.jsx)(i.a,{href:"https://www.threatmodelingmanifesto.org",children:"Threat model manifesto"})," ","\ud83d\ude2e"," !"]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},80569:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/files/architecture-e6fad1720a863c9a3986400cb5ac1287.svg"},26149:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/architecture-e6fad1720a863c9a3986400cb5ac1287.svg"},28453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>o});var r=n(96540);const t={},s=r.createContext(t);function a(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);