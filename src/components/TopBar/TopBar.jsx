import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import routes from "../../routes/routes.json";
import coinLogo from "../../images/coinLogo.svg";
import zerodhaShadow from "../../images/zerodhaShadow.svg";

const TopBar = () => {
  const location = useLocation();

  const navigationStyles = (path) => {
    return location.pathname === path ? { color: "#0059c1" } : null;
  };

  return (
    <Navbar expand="md" bg="light" className="px-4">
      <div className="container" style={{ maxWidth: "1199px" }}>
        <Navbar.Brand>
          <NavLink to={routes.HOME}>
            <img
              src={coinLogo}
              alt="zerodha coin logo"
              style={{ height: "23px", width: "80px" }}
            />
          </NavLink>
          <img
            src={zerodhaShadow}
            alt="Zerodha logo"
            style={{ height: "27px", width: "73px", marginLeft: "10px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ fontSize: "17px" }}></Nav>
          <Nav>
            <Nav.Link
              as={NavLink}
              className="me-3 mx-4"
              to={routes.MUTUAL_FUNDS}
              style={navigationStyles(routes.MUTUAL_FUNDS)}
            >
              Mutual funds
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              className="me-3 mx-4"
              to={routes.G_SECS}
              style={navigationStyles(routes.G_SECS)}
            >
              G-Secs
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              className="me-3 mx-4"
              to={routes.CORPORATE_BONDS}
              style={navigationStyles(routes.CORPORATE_BONDS)}
            >
              Corporate bonds
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              className="me-3 mx-4"
              to={routes.ETF_SGB}
              style={navigationStyles(routes.ETF_SGB)}
            >
              ETF & SGB
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              className="me-3 mx-4"
              to={routes.LOGIN}
              style={navigationStyles(routes.LOGIN)}
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default TopBar;
