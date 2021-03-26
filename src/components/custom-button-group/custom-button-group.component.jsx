import React from "react";

import { ButtonGroup, Button } from "react-bootstrap";

const CustomButtonGroup = () => {
  return (
    <ButtonGroup className="mb-2">
      <Button active>Expense</Button>
      <Button>Income</Button>
      <Button>Transfer</Button>
    </ButtonGroup>
  );
};

export default CustomButtonGroup;
