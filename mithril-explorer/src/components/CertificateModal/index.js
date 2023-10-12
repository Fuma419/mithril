import React, { useEffect, useState } from "react";
import { Badge, Button, Col, Container, ListGroup, Modal, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import RawJsonButton from "../RawJsonButton";
import LinkButton from "../LinkButton";
import Stake from "../Stake";
import ProtocolParameters from "../ProtocolParameters";
import PoolTicker from "../PoolTicker";
import VerifiedBadge from "../VerifiedBadge";
import { selectedAggregator } from "../../store/settingsSlice";
import PartyId from "../PartyId";

export default function CertificateModal(props) {
  const [certificate, setCertificate] = useState({});
  const certificateEndpoint = useSelector(
    (state) => `${selectedAggregator(state)}/certificate/${props.hash}`,
  );
  const aggregator = useSelector(selectedAggregator);
  const networkCode = (state) => {
    return selectedAggregator(state).split("/")[2].split(".")[1]
  };
  const verifyCertificateUrl = useSelector((state) => `http://localhost:8080/?certificate=${props.hash}&aggregator=${selectedAggregator(state)}&genesis_verification_key=https://raw.githubusercontent.com/input-output-hk/mithril/main/mithril-infra/configuration/${networkCode(state)}/genesis.vkey`);

  useEffect(() => {
    if (!props.hash) {
      return;
    }

    fetch(certificateEndpoint)
      .then((response) => (response.status === 200 ? response.json() : {}))
      .then((data) => setCertificate(data))
      .catch((error) => {
        setCertificate({});
        console.error("Fetch certificate error:", error);
      });
  }, [certificateEndpoint, props.hash]);

  function showPrevious() {
    props.onHashChange(certificate.previous_hash);
  }

  function close() {
    props.onHashChange(undefined);
  }

  return (
    <Modal
      show={props.hash !== undefined}
      onHide={close}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header className="text-break" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Certificate {certificate.hash}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {Object.entries(certificate).length === 0 ? (
          <p>Not found</p>
        ) : (
          <Container>
            <Row md={1} xl="auto">
              <Col xl={4}>
                <h4>Beacon</h4>
                <ListGroup className="margin-bottom--md" variant="flush">
                  <ListGroup.Item>Network: {certificate.beacon.network}</ListGroup.Item>
                  <ListGroup.Item>Epoch: {certificate.beacon.epoch}</ListGroup.Item>
                  <ListGroup.Item>
                    Immutable File Number: {certificate.beacon.immutable_file_number}
                  </ListGroup.Item>
                </ListGroup>
                <h4>Protocol Parameters</h4>
                <ProtocolParameters protocolParameters={certificate.metadata.parameters} />
                <br  />
                <h4>Live Verification</h4>
                <LinkButton href={verifyCertificateUrl} target="_blank">
                  Verify Certificate Now!
                </LinkButton>
              </Col>
              <Col xl={8}>
                <h4>Signers</h4>
                {certificate.genesis_signature !== "" ? (
                  <div>
                    This is the chain Genesis Certificate, since it&apos;s manually created it
                    doesn&apos;t contain any Signers.
                  </div>
                ) : certificate.metadata.signers.length === 0 ? (
                  <div>
                    No Signers for this certificate, something went wrong either with the data
                    retrieval or the signing process
                  </div>
                ) : (
                  <>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th></th>
                          <th>Party id</th>
                          <th>Pool ticker</th>
                          <th style={{ textAlign: "end" }}>Stake</th>
                        </tr>
                      </thead>
                      <tbody>
                        {certificate.metadata.signers.map((signer) => (
                          <tr key={signer.party_id}>
                            <td>
                              {signer.verification_key_signature && (
                                <VerifiedBadge tooltip="Verified Signer" />
                              )}
                            </td>
                            <td>
                              <PartyId partyId={signer.party_id} />
                            </td>
                            <td>
                              <PoolTicker aggregator={aggregator} partyId={signer.party_id} />
                            </td>
                            <td style={{ textAlign: "end" }}>
                              <Stake lovelace={signer.stake} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </>
                )}
              </Col>
            </Row>
          </Container>
        )}
      </Modal.Body>
      <Modal.Footer>
        {certificate.genesis_signature !== "" ? (
          <Badge bg="warning">Genesis</Badge>
        ) : (
          <>
            <Button size="sm" onClick={showPrevious} className="text-break">
              Previous hash: {certificate.previous_hash}
            </Button>
          </>
        )}
        <RawJsonButton href={certificateEndpoint} size="sm" />
      </Modal.Footer>
    </Modal>
  );
}
