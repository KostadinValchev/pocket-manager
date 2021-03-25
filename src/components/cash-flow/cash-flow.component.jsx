import React from "react";
import { ProgressBar } from "react-bootstrap";

import "./cash-flow.styles.css";

const CashFlow = () => {
  return (
    <div className="cf-wraper">
      <div className="cf-header-cont">
        <p>Last 31 days</p>
        <span>-158,60 $</span>
      </div>
      <div className="cf-label">
        <span>Income</span> <span>157,00 $</span>
      </div>
      <ProgressBar
        style={{ marginBottom: "1rem" }}
        animated
        variant="success"
        now={45}
      />
      <div className="cf-label">
        <span>Expense</span> <span>315,60 $</span>
      </div>
      <ProgressBar
        style={{ marginBottom: "1rem" }}
        animated
        variant="danger"
        now={100}
      />
    </div>
  );
};

export default CashFlow;
