import React from "react";
import { Button, Form } from "react-bootstrap";
import coinWeb from "../../images/coinWeb.png";
import kiteLogo from "../../images/kiteLogo.svg";
import zerodhaLoginLogo from "../../images/zerodhaLoginLogo.svg";

const KiteLogin = () => {
  const smallTextStyle = {
    fontSize: "9px"
  };
  const btnStyles = {
    width: "100%",
    backgroundColor: "#ff5722",
    border: "none",
    marginTop: "22px"
  };
  const backgroundBox = {
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    padding: "40px",
    borderRadius: "1px"
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div style={{ width: "340px" }}>
        <div className="d-flex justify-content-center mb-3">
          <img
            src={coinWeb}
            alt="coin logo"
            style={{ borderRadius: "50%", width: "50px" }}
          />
        </div>
        <div>
          <h4 className="text-center mb-3">Login to Coin Web</h4>
        </div>
        <div className="p-5" style={backgroundBox}>
          <div className="text-center" style={{ marginTop: "-20px" }}>
            <img
              src={kiteLogo}
              alt="kite logo"
              width="60"
              className="text-center"
            />
          </div>
          <Form>
            <Form.Group>
              <Form.Label>User ID</Form.Label>
              <Form.Control type="email" className="mb-4" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group>
              <Form.Check
                className="mt-3"
                type="checkbox"
                label="Login to Kite Web also?"
              />
              <Form.Text
                className="mt-1 text-muted"
                style={{ fontSize: "10px", marginLeft: "23px" }}
              >
                Not recommended on shared or public systems
              </Form.Text>
            </Form.Group>
            <Button style={btnStyles}>Login</Button>
            <div
              className="text-center text-muted mt-3"
              style={{ fontSize: "10px" }}
            >
              Forgot user ID or password?
            </div>
          </Form>
        </div>

        <div className="text-center mt-4">
          <img src={zerodhaLoginLogo} alt="zerodha logo" />
          <div className="mt-3 mb-2">
            <small className="text-muted">
              Don't have an account? Signup now!
            </small>
          </div>
          <div>
            <small className="text-light text-muted" style={smallTextStyle}>
              Zerodha Broking Limited: Member of NSE, BSE ‐ SEBI Reg. no.
              INZ000031633, CDSL ‐ SEBI Reg. no. IN-DP-431-2019 | Zerodha
              Commodities Pvt. Ltd.: MCX ‐ SEBI Reg. no. INZ000038238
            </small>
          </div>
          <div>
            <small className="text-light text-muted" style={smallTextStyle}>
              v3.0.0
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KiteLogin;
