import React from "react";

import { Form } from "react-bootstrap";

import "./filter.styles.css";

const Filter = ({ title, options }) => {
  return (
    <Form.Group>
      <Form.Label className="filter-label">{title}</Form.Label>
      <Form.Control className="filter-form-control" as="select">
        {options.map((opt) => (
          <option>{opt}</option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default Filter;
