import React from "react";
import { Container } from "react-bootstrap";
import heroSgb from "../../images/heroSgb.svg";
import InvestmentCard from "../InvestmentCard/InvestmentCard";

const EtfSgbCard = () => {
  return (
    <>
      <div className="bg-light" style={{ minHeight: "50vh" }}>
        <Container fluid>
          <InvestmentCard
            heading="Gold bonds"
            description="One of the best ways to invest in gold. Fixed 2.5% per year on invested amount + Gold’s market returns. Guaranteed by the Government of India*"
            imgSrc={heroSgb}
          />
        </Container>
      </div>
    </>
  );
};

export default EtfSgbCard;
