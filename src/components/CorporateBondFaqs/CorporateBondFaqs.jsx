import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserButtons from "../UserButtons/UserButtons";

const CorporateBondFaqs = () => {
  return (
    <Container fluid className="pt-5 pb-5">
      <Row className="justify-content-center">
        <Col xs={12} md={5} lg={6} className="bg-light p-4">
          <h2 className="mb-3">FAQs</h2>
          <h4 className="mt-5">How to invest?</h4>
          <p className="pb-3 pt-2 text-secondary">
            Login to see the list of available taxable and tax-free bonds.
            Select the bond you wish to invest in and make the payment. The
            bonds will be credited to your demat upon successful payment. All
            interest payments will be credited to your bank account.
            <br />
            <p className="mt-4">
              <span className="text-primary">Click here</span> to learn more
              about investing in bonds.
            </p>
          </p>
          <h4 className="mt-5">How to exit?</h4>
          <p className="pb-3 pt-2 text-secondary">
            All bonds are listed on the exchanges and if you want to exit, you
            can sell them just like stocks.
            <br />
            <p className="mt-4">
              You can <span className="text-primary">create a ticket here</span>{" "}
              in case of any queries.
            </p>
          </p>
          <UserButtons className="mt-4" />
        </Col>
      </Row>
    </Container>
  );
};

export default CorporateBondFaqs;
