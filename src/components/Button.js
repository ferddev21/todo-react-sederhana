import React from "react";
import PropTypes from "prop-types";
import "../css/Button.css";

const Button = ({ text, variant, action }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={action}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Button;
