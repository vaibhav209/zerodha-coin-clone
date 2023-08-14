import { Container } from "react-bootstrap";
import heroMf from "../../images/heroMf.svg";
import InvestmentCard from "../InvestmentCard/InvestmentCard";

const MutualFundCard = () => {
  return (
    <div className="bg-light" style={{ minHeight: "50vh" }}>
      <Container fluid>
        <InvestmentCard
          heading="Invest in commission-free direct mutual funds"
          description="Commissions on regular mutual funds can be up to 1% compounded every year."
          text="Buy direct funds on Coin — free."
          imgSrc={heroMf}
        />
      </Container>
    </div>
  );
};

export default MutualFundCard;
