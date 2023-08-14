import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CoinInvestments from "../components/CoinInvestments/CoinInvestments";
import CoinPlatform from "../components/CoinPlatform/CoinPlatform";

const Home = () => {
  return (
    <>
      {/* <CoinPlatform />
      <CoinInvestments /> */}

      <Container fluid>
        <Row>
          <Col xs={12}>
            <CoinPlatform />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <CoinInvestments />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
