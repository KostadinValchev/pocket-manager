import React from "react";

import { Form } from "react-bootstrap";

const FormTextArea = ({ name, label, value, handleChange, rows }) => {
  return (
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>{label}</Form.Label>
      <Form.Control as="textarea" name={name} onChange={handleChange} value={value} rows={rows} />
    </Form.Group>
  );
};

export default FormTextArea;
