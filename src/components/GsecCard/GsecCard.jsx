import React from "react";
import { Container } from "react-bootstrap";
import heroGsec from "../../images/heroGsec.svg";
import InvestmentCard from "../InvestmentCard/InvestmentCard";

const GsecCard = () => {
  return (
    <>
      <div className="bg-light" style={{ minHeight: "50vh" }}>
        <Container fluid>
          <InvestmentCard
            heading="Invest in Government Securities (G-Secs)"
            description="Safer than bank FDs, guaranteed by the Govt. of India."
            imgSrc={heroGsec}
          />
        </Container>
      </div>
    </>
  );
};

export default GsecCard;
