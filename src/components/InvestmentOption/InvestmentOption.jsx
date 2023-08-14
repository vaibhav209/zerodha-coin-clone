import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const InvestmentOption = ({
  imgSrc,
  imgWidth,
  imgHeight,
  heading,
  description,
  extraText,
  linkText
}) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Col xs={12} sm={5} className="pb-3 mt-5">
        <div className="d-flex justify-content-start align-items-center">
          <div style={{ paddingRight: "60px" }}>
            <img
              src={imgSrc}
              alt="logo img"
              width={imgWidth}
              height={imgHeight}
              className="d-none d-sm-block !important"
            />
          </div>
          <div className="ml-3">
            <h4>{heading}</h4>
            <p className={"text-secondary"}>{description}</p>
            <div>
              {extraText && <small className={"text-muted"}>{extraText}</small>}
            </div>
            {linkText && (
              <NavLink to="#" style={{ textDecoration: "none" }}>
                {linkText}
              </NavLink>
            )}
          </div>
        </div>
      </Col>
    </div>
  );
};
export default InvestmentOption;
