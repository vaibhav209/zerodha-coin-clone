import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./CoinInvestments.module.css";
import CoinPromo from "../CoinPromo/CoinPromo";
import landingMf from "../../images/landingMf.svg";
import landingGsec from "../../images/landingGsec.svg";
import landingCb from "../../images/landingCb.svg";
import landingEtf from "../../images/landingEtf.svg";
import InvestmentOption from "../InvestmentOption/InvestmentOption";

const CoinInvestments = () => {
  return (
    <>
      <Container className="pt-5 pb-5">
        <Row className="text-center mb-4">
          <Col>
            <h4 className={styles.mainHeading}>Many investment options</h4>
            <h5 className="text-secondary">
              One platform for all your long-term investment needs
            </h5>
          </Col>
        </Row>
        {/* Investment Options */}
        <InvestmentOption
          imgSrc={landingMf}
          imgWidth="80"
          imgHeight="80"
          heading="Direct mutual funds"
          description="Save up to 1% in commissions by Investing in zero commission direct mutual funds for free."
          linkText="More"
        />
        <InvestmentOption
          imgSrc={landingGsec}
          imgWidth="80"
          imgHeight="80"
          heading="Government bonds"
          description="Earn better returns than FDs with a government guarantee by investing in Govt bonds, T-bills, and State Development Loans (SDLs)*"
          extraText="*SDLs have an implied sovereign guarantee"
          linkText="More"
        />
        <InvestmentOption
          imgSrc={landingCb}
          imgWidth="80"
          imgHeight="80"
          heading="Corporate bonds"
          description="High-quality corporate bonds that offer better returns than fixed deposits."
          linkText="More"
        />
        <InvestmentOption
          imgSrc={landingEtf}
          imgWidth="80"
          imgHeight="80"
          heading="Sovereign gold bonds"
          description="One of the best options to invest in gold. Earn Fixed 2.5% per year interest + gold’s market return."
          linkText="More"
        />
      </Container>

      <CoinPromo />

      <Row className="text-center" style={{ margin: "8% 0 8% 0" }}>
        <Col xs={12}>
          <h3 style={{ fontSize: "30px" }}>Don't have a Zerodha account?</h3>
          <p className="text-secondary">
            Open an account and start investing in stocks, mutual funds and more
            for free
          </p>
          <div className="d-flex justify-content-center mt-2">
            <Button
              size="lg"
              className={`rounded-pill px-5 py-2 ${styles.btnSignUp}`}
              variant="primary"
            >
              Signup now
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CoinInvestments;
