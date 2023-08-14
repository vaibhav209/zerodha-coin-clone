import React from "react";
import CorporateBondCard from "../components/CorporateBondCard/CorporateBondCard";
import CorporateBondFaqs from "../components/CorporateBondFaqs/CorporateBondFaqs";
import CorporateBondSponser from "../components/CorporateBondSponser/CorporateBondSponser";
import CorporateBondYields from "../components/CorporateBondYields/CorporateBondYields";

const CorporateB = () => {
  return (
    <>
      <CorporateBondCard />
      <div className="mt-5 mb-5">
        <CorporateBondYields />
      </div>
      <CorporateBondFaqs />
      <CorporateBondSponser />
    </>
  );
};

export default CorporateB;
