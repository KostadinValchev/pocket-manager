import React from "react";

import { Form } from "react-bootstrap";

const FormTextArea = ({label, rows}) => {
  return (
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>{label}</Form.Label>
      <Form.Control as="textarea" rows={rows} />
    </Form.Group>
  );
};

export default FormTextArea;
