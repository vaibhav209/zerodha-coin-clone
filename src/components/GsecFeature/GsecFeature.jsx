import React from "react";
import gsecLand1 from "../../images/gsecLand1.svg";
import gsecLand2 from "../../images/gsecLand2.svg";
import gsecLand3 from "../../images/gsecLand3.svg";
import InvestmentOption from "../InvestmentOption/InvestmentOption";

const GsecFeature = () => {
  return (
    <>
      <InvestmentOption
        imgSrc={gsecLand1}
        imgWidth="90"
        imgHeight="90"
        heading="Sovereign Guarantee"
        description="Unlike other fixed income products like bank FD’s, debt funds etc that carry a credit risk, G-Secs are guaranteed by Govt. of India."
      />
      <InvestmentOption
        imgSrc={gsecLand2}
        imgWidth="90"
        imgHeight="90"
        heading="Better Returns"
        description="Lock in attractive interest rates with upto 40 years, unlike bank FDs that have a maximum tenure of 10 years."
      />
      <InvestmentOption
        imgSrc={gsecLand3}
        imgWidth="90"
        imgHeight="90"
        heading="No TDS"
        description="No tax deduction at source like bank FDs. Pay taxes as per your income tax slab at end of the financial year."
      />
    </>
  );
};

export default GsecFeature;
