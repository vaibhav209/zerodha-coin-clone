import React from "react";
import { Container } from "react-bootstrap";
import heroCb from "../../images/heroCb.svg";
import InvestmentCard from "../InvestmentCard/InvestmentCard";

const CorporateBondCard = () => {
  return (
    <>
      <div className="bg-light" style={{ minHeight: "50vh" }}>
        <Container fluid>
          <InvestmentCard
            heading="Invest in high-quality corporate bonds"
            description="Fixed interest, higher returns than fixed deposits."
            imgSrc={heroCb}
          />
        </Container>
      </div>
    </>
  );
};

export default CorporateBondCard;
