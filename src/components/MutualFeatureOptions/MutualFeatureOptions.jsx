import { Col } from "react-bootstrap";

const MutualFeatureOptions = ({ imgSrc, heading, description }) => {
  return (
    <Col md={2} className="mx-3 mb-5">
      <Col className="d-none d-md-block" md={4}>
        <img src={imgSrc} alt="mf land 3" className="img-fluid" />
      </Col>
      <h4 className="mt-4 mb-4">{heading}</h4>
      <p className="text-secondary">{description}</p>
    </Col>
  );
};

export default MutualFeatureOptions;
