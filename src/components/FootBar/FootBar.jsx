import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import zerodhaFooterLogo from "../../images/zerodhaFooterLogo.svg";

const FootBar = () => {
  const fontStyle = {
    fontSize: "14px"
  };

  return (
    <footer className="p-4 text-white" style={{ backgroundColor: "#222" }}>
      <Container>
        <div>
          <div>
            <Row className="justify-content-between">
              <Col xs={6}>
                <img src={zerodhaFooterLogo} alt="Zerodha logo" />

                <div className="mt-2" style={fontStyle}>
                  <span>Support portal</span>
                </div>
              </Col>
              <Col className="text-end" xs={6}>
                <ul className="list-unstyled">
                  <li className="d-inline me-3">TOS</li>
                  <li className="d-inline me-3">About</li>
                </ul>
              </Col>
            </Row>
            <Row className="mt-3" style={fontStyle}>
              <Col xs={6}>
                <p>
                  Mutual Funds investments are subject to market risks, read all
                  scheme related documents carefully. Past performance is not an
                  indicator for future returns.
                </p>
              </Col>
              <Col xs={6}>
                <p>
                  * The figures are for representational purposes only and do
                  not offer any guarantees. The figures have been calculated
                  based on historic returns of top performing mutual funds.
                </p>
              </Col>
            </Row>
            <Row className="mt-3" style={fontStyle}>
              <Col xs={6}>
                <p>
                  <span className="d-block">Zerodha Broking Limited: </span>
                  <span className="d-block">
                    Member of NSE &amp; BSE – SEBI Registration no.:
                    INZ000031633
                  </span>
                  <span className="d-block">NPS-POP 319072020</span>
                </p>
              </Col>
              <Col xs={6}>
                <p>
                  <span>
                    CDSL: Depository services through Zerodha Broking Ltd.
                  </span>
                  <br />
                  <span>SEBI Registration no.: IN-DP-431-2019</span>
                </p>
              </Col>
            </Row>
            <div className="mt-3" style={fontStyle}>
              <p>
                Coin is only an order collection platform that collects orders
                on behalf of clients and places them on BSE StarMF for
                execution. The funds for all purchase orders are directly
                debited from the client's bank account (which is linked to your
                trading account) and credited to Indian Clearing Corporation
                Limited's bank account (ICCL). The amount from all redemption
                orders are directly credited to your bank account (which is
                linked to your trading account) by ICCL as per the settlement
                time of the respective scheme. Client expressly agrees that
                Zerodha is not liable or responsible and does not represent or
                warrant any damages regarding non-execution of orders or any
                incorrect execution of orders with regard to the funds chosen by
                the client or due to, but not being limited to, any link/system
                failure, delay in transfer of the funds on account of any
                unforeseen circumstances/issues in the banking system/payment
                aggregators or any other problems that may result in a delay in
                crediting the funds into the BSE Star MF's bank account.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default FootBar;
