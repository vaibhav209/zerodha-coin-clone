import { Col, Container, Row } from "react-bootstrap";
import UserButtons from "../UserButtons/UserButtons";

const InvestmentCard = ({ heading, description, text, imgSrc }) => {
  return (
    <Container className="pt-4 pb-4">
      <Row className="align-items-center">
        <div className="d-flex justify-content-center">
          <Col md={7} className="p-4">
            <h2>{heading}</h2>
            <p
              className="text-secondary mt-4 mb-4"
              style={{ fontSize: "19px" }}
            >
              {description}
            </p>
            {text && (
              <p className="text-secondary" style={{ fontSize: "19px" }}>
                {text}
              </p>
            )}
            <div className="mt-4">
              <UserButtons />
            </div>
          </Col>
          <Col xs={0} md={2} className="text-center pt-4">
            <img src={imgSrc} alt="mf hero" className="img-fluid" />
          </Col>
        </div>
      </Row>
    </Container>
  );
};
export default InvestmentCard;
