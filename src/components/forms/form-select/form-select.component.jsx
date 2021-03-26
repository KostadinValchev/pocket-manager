import React from "react";

import { Form } from "react-bootstrap";

import "./form-select.styles.css";

const FormSelect = ({ name, data, onChange, categories, otherProps }) => {
  return (
    <Form.Group className="form-select-wrapper">
      <Form.Control
        className="form-control"
        name={name}
        onChange={onChange}
        data={data}
        as="select"
      >
        {data.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </Form.Control>
    </Form.Group>
  );
};

export default FormSelect;
