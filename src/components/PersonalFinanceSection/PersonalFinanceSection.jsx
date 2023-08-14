import { Container, Col, Row } from "react-bootstrap";
import UserButtons from "../UserButtons/UserButtons";

const PersonalFinanceSection = () => {
  return (
    <Container
      className="mb-5"
      style={{ paddingBottom: "100px", maxWidth: "900px" }}
    >
      <Row className="bg-light d-flex justify-content-center">
        <Col className="p-5">
          <h2>Personal finance simplified</h2>
          <p className="text-muted mt-4 mb-5">
            Investing is hard, but it need not be. We’ve made learning personal
            finance concepts easy to understand on{" "}
            <span className="text-primary">Varsity</span> and
            <span className="text-primary"> Zerodha Educate</span>. No jargon,
            no complexity.
          </p>
          <UserButtons />
        </Col>
      </Row>
    </Container>
  );
};

export default PersonalFinanceSection;
