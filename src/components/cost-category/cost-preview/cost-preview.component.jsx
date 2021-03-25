import React from "react";

import { ProgressBar } from "react-bootstrap";

import "./cost-preview.styles.css";

const CostPreview = () => {
  return (
    <div className="cp-wraper">
      <div className="cf-header-cont">
        <p>Last Month</p>
        <span>-158,60 $</span>
      </div>
      <div className="cf-label">
        <span>Category name</span> <span>$$$$</span>
      </div>
      <ProgressBar
        style={{ marginBottom: "1rem" }}
        variant="warning"
        now={100}
      />
      <div className="cf-label">
        <span>Category name</span> <span>$$$$</span>
      </div>
      <ProgressBar
        style={{ marginBottom: "1rem" }}
        variant="danger"
        now={100}
      />
      <div className="cf-label">
        <span>Category name</span> <span>$$$$</span>
      </div>
      <ProgressBar
        style={{ marginBottom: "1rem" }}
        variant="info"
        now={100}
      />
      <div className="cf-label">
        <span>Category name</span> <span>$$$$</span>
      </div>
      <ProgressBar
        style={{ marginBottom: "1rem" }}
        variant="success"
        now={100}
      />
    </div>
  );
};

export default CostPreview;
