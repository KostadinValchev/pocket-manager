import React from "react";

import { ButtonGroup, Button } from "react-bootstrap";

const CustomButtonGroup = ({ recordTypes, current, onRecordType }) => {
  return (
    <ButtonGroup className="mb-2">
      {recordTypes.map((rec, index) => (
        <Button
          active={rec.type === current ? true : false}
          onClick={() => onRecordType(rec.type, rec.color)}
          key={index}
        >
          {rec.type.charAt(0).toUpperCase() + rec.type.slice(1)}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default CustomButtonGroup;
