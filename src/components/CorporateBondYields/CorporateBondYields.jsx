import React from "react";
import { Row, Col } from "react-bootstrap";

const CorporateBondYields = () => {
  return (
    <div className="text-center mt-5">
      <h2>Bond yields</h2>
      <h5 className="mt-4 text-secondary">
        Corporate bonds offer better yields than bank FDs
      </h5>
      <Row className="justify-content-center mt-5 mb-5 w-100">
        <Col xs={12} md={8}>
          <table className="table table-borderless">
            <thead>
              <tr>
                <th></th>
                <th className="text-center">Corporate bonds</th>
                <th className="text-center">Fixed deposits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-light text-center">5 years</td>
                <td className="bg-light text-center">7.10%</td>
                <td className="bg-light text-center">6.10%</td>
              </tr>
              <tr>
                <td className="bg-light text-center">10 years</td>
                <td className="bg-light text-center">7.56%</td>
                <td className="bg-light text-center">6.10%</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </div>
  );
};

export default CorporateBondYields;
