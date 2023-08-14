import React from "react";
import { Row, Col } from "react-bootstrap";

const EtfSgbIssues = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <h2>Upcoming issues</h2>
      </div>
      <Row className="justify-content-center mt-2 p-5 w-100">
        <Col xs="auto">
          <table className="bg-light">
            <thead>
              <tr>
                <th className="text-muted p-3 fw-normal">S. No.</th>
                <th className="text-muted p-3 fw-normal">Tranche</th>
                <th className="text-muted p-3 fw-normal">
                  Date of Subscription
                </th>
                <th className="text-muted p-3 fw-normal">Date of Issuance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3">
                  {" "}
                  <strong>1.</strong>
                </td>
                <td className="p-3">
                  {" "}
                  <strong> 2023-24 Series II</strong>
                </td>
                <td className="p-3">
                  {" "}
                  <strong> September 11 - September 15, 2023</strong>
                </td>
                <td className="p-3">
                  {" "}
                  <strong> September 20, 2023</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-end text-muted mt-1">
            *Read more: <span className="text-primary">RBI</span>,{" "}
            <span className="text-primary">NSE</span>
          </p>
        </Col>
      </Row>
    </>
  );
};

export default EtfSgbIssues;
