import React from "react";

import "./interval-date.styles.css";

const IntervalDate = () => {
  return (
    <div className="interval">
      <i class="fas fa-arrow-left interval-arrow"></i>
      <div className="interval-title">
        <span>January</span>
      </div>
      <i class="fas fa-arrow-right interval-arrow"></i>
    </div>
  );
};

export default IntervalDate;
