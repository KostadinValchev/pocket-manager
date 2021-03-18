import React from "react";

import { Form } from "react-bootstrap";

import "./form-select.styles.css";

const FormSelect = ({ name, onChange, otherProps }) => {
  return (
    <Form.Group className="form-select-wrapper">
      <Form.Control
        className="form-control"
        name={name}
        onChange={onChange}
        as="select"
      >
        <option>USD - US Dollar</option>
        <option>EUR - Euro</option>
        <option>BGN - Bulgarian Lev</option>
        <option>GBP - British Pound</option>
      </Form.Control>
    </Form.Group>
  );
};

export default FormSelect;
