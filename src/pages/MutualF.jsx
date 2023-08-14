import React from "react";
import MutualFundCard from "../components/MutualFundCard/MutualFundCard";
import MutualFundFeatures from "../components/MutualFundFeatures/MutualFundFeatures";

const MutualF = () => {
  return (
    <>
      <MutualFundCard />
      <div className="mt-5">
        <MutualFundFeatures />
      </div>
    </>
  );
};

export default MutualF;
