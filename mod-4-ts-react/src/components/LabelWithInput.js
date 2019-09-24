import React from "react";
import PropTypes from "prop-types";

const LabelWithInput = ({ label, name, value, onChange, props }) => {
  return (
    <div>
      <label>{label}</label>
      <input name={name} value={value} {...props} onChange={onChange} />
    </div>
  );
};

LabelWithInput.propTypes = {
  label: PropTypes.string.isRequired
};

export default LabelWithInput;
