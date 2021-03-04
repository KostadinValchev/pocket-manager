import React from "react";

import "./form-input.styles.css";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
     <label className="form-input-label">{label}</label> 
    <input className="form-input" onChange={handleChange} {...otherProps} />
  </div>
);

export default FormInput;
