import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserButtons from "../UserButtons/UserButtons";

const GsecFaqs = () => {
  return (
    <Container fluid className="pt-5 pb-5">
      <Row className="justify-content-center">
        <Col xs={12} md={5} lg={6} className="bg-light p-4">
          <h2 className="mb-3">FAQs</h2>
          <h4 className="mt-5">Bonds and T-Bills</h4>
          <p className="pb-3 pt-2 text-secondary">
            G-Secs with maturity less than 1 year are called T-Bills (Treasury
            bills) and those greater than 1 year are called Bonds.
          </p>
          <h4 className="mt-5">How to invest?</h4>
          <p className="pb-3 pt-2 text-secondary">
            The exchanges open a non-competitive bidding window every week for
            G-Secs. You can invest in these securities using your Zerodha
            account and the funds will be deducted from your trading balance.
            Bids for T-Bills are collected from Monday to Tuesday and for Bonds
            from Tuesday to Thursday. G-Secs will be credited to your demat upon
            successful allotment and all interest payments and maturity proceeds
            will be credited to your bank account.
          </p>
          <h4 className="mt-5">How to exit?</h4>
          <p className="pb-3 pt-2 text-secondary">
            Government bonds, Treasury Bills (T-bills) and State Development
            Loans (SDLs) are now listed on the exchanges. You can exit by
            selling them, just like stocks. You can create a{" "}
            <span className="text-primary">ticket</span> here in case of any
            queries.
          </p>
          <p className="pb-3 text-secondary">
            The coupon (interest payment) is guaranteed by Govt. of India. But
            if you wish to sell the bond before maturity, the price can be
            different than your purchase price. Check out this{" "}
            <span className="text-primary">Varsity chapter</span> before
            investing in G-secs.
          </p>
          <h4 className="mt-5">Transaction costs</h4>
          <p className="pb-3 pt-2 text-muted">
            0.06% or Rs 6 for every Rs 10,000 invested will be charged as
            brokerage. 18% GST will be applicable on the total brokerage
            incurred.
          </p>
          <UserButtons className="mt-4" />
        </Col>
      </Row>
    </Container>
  );
};

export default GsecFaqs;
