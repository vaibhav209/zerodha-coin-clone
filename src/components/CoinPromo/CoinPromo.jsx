import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import coinLanding from "../../images/coinLanding.png";
import appStoreBadge from "../../images/appStoreBadge.svg";
import googlePlayBadge from "../../images/googlePlayBadge.svg";

const CoinPromo = () => {
  return (
    <Container
      className="bg-light mt-5 pt-5 pb-2 mb-5"
      style={{ maxWidth: "800px" }}
    >
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={5} sm={3}>
          <img src={coinLanding} alt="img" className="img-fluid" />
        </Col>
        <Col xs={12} md={7} sm={6} className="mt-4 mt-md-0">
          <h2 className="mb-3">Download the app</h2>
          <p className="text-muted mb-3">
            Investing early makes a huge difference. Download the Coin app and
            make your first investment today.
          </p>
          <div className="d-flex gap-4 mb-3 mt-4">
            <img src={appStoreBadge} alt="app-store" />
            <img src={googlePlayBadge} alt="play-store" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CoinPromo;
