import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import UserButtons from "../UserButtons/UserButtons";
import landingHero from "../../images/landingHero.png";

const CoinPlatform = () => {
  return (
    <Container
      fluid
      className="bg-light d-flex align-items-start"
      style={{ paddingBottom: "6%" }}
    >
      <Row className="mt-5">
        <Col xs={0} md={5} className="d-none d-md-block">
          <img
            src={landingHero}
            alt="landing hero"
            style={{ width: "45vw", maxHeight: "600px" }}
          />
        </Col>
        <Col md={1} />
        <Col xs={12} md={5} className="mt-5 pt-5 p-2">
          <h2 className="mb-4 mt-5">
            Invest in your long term financial goals
          </h2>
          <h5 className="fw-normal text-secondary mb-4">
            Invest in 0% commission direct mutual funds and Govt, corporate, and
            gold bonds on India’s largest direct mutual funds platform.
          </h5>
          <div className="d-flex mt-3">
            <UserButtons />
          </div>
          <p className="mt-4 text-secondary">
            Don't have a Zerodha account?{" "}
            <NavLink to="#" style={{ textDecoration: "none" }}>
              Signup now
            </NavLink>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default CoinPlatform;
