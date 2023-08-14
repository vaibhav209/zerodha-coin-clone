import { Row } from "react-bootstrap";
import mfLand1 from "../../images/mfLand1.svg";
import mfLand2 from "../../images/mfLand2.svg";
import mfLand3 from "../../images/mfLand3.svg";
import MutualFeatureOptions from "../MutualFeatureOptions/MutualFeatureOptions";
import PersonalFinanceSection from "../PersonalFinanceSection/PersonalFinanceSection";

const MutualFundFeatures = () => {
  return (
    <>
      <Row className="justify-content-center mt-5 w-100">
        <MutualFeatureOptions
          imgSrc={mfLand1}
          heading="Keep more of your money"
          description="All investments on Coin are in direct plans of mutual funds. No hidden commissions, no extra fees."
        />
        <MutualFeatureOptions
          imgSrc={mfLand2}
          heading="One portfolio view"
          description="Since mutual funds on Coin are held in demat mode, you get a single portfolio of all your investments in mutual funds, ETFs, stocks, and bonds."
        />
        <MutualFeatureOptions
          imgSrc={mfLand3}
          heading="For the DIY investor in you"
          description="nvest the way you you want. Modify, pause, and resume SIPs instantly."
        />
      </Row>
      <div className="mt-5 mb-5">
        <PersonalFinanceSection />
      </div>
    </>
  );
};

export default MutualFundFeatures;
