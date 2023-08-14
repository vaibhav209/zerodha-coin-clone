import React from "react";
import goldenPi from "../../images/goldenPi.svg";

const CorporateBondSponser = () => {
  return (
    <div className="d-flex justify-content-center mb-5">
      <div className="d-flex">
        <p className="mx-1 text-secondary">Powered by</p>
        <span>
          <img src={goldenPi} alt="gold logo" height="27" />
        </span>
      </div>
    </div>
  );
};

export default CorporateBondSponser;
