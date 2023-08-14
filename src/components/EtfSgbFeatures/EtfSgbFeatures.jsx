import React from "react";
import goldBond1 from "../../images/goldBond1.svg";
import goldBond2 from "../../images/goldBond2.svg";
import goldBond3 from "../../images/goldBond3.svg";
import EtfSgbIssues from "../EtfSgbIssues/EtfSgbIssues";
import InvestmentOption from "../InvestmentOption/InvestmentOption";

const EtfSgbFeatures = () => {
  return (
    <>
      <div className="mt-5">
        <InvestmentOption
          imgSrc={goldBond1}
          imgWidth="80"
          imgHeight="40"
          heading="Safe"
          description="Held in demat form"
        />
        <InvestmentOption
          imgSrc={goldBond2}
          imgWidth="80"
          imgHeight="40"
          heading="No charges"
          description="No management fees or other charges. Gold ETFs & mutual funds charge up to ~1% as expense ratios."
        />
        <InvestmentOption
          imgSrc={goldBond3}
          imgWidth="80"
          imgHeight="40"
          heading="Better than other forms of gold"
          description="No hidden charges or GST. Some forms of gold like digital gold incur a 3% GST + 3%+ spread on selling."
        />
      </div>
      <div style={{ marginTop: "10%", marginBottom: "10%" }}>
        <EtfSgbIssues />
      </div>
    </>
  );
};

export default EtfSgbFeatures;
