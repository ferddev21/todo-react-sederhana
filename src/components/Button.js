import React from "react";
import PropTypes from "prop-types";
import "../css/Button.css";

const Button = ({ text, variant }) => {
  return <button className={`btn btn-${variant}`}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Button;
