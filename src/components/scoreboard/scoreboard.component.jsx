import React from "react";

import "./scoreboard.styles.css";

const Scoreboard = () => {
  return (
    <div className="scoreboard-container"  data-anim="base wrapper">
      <div className="square">
        <div className="circle" data-anim="base right"></div>
        <span className="square-value">1.4k</span>
        <span className="square-title">BALANCE</span>
      </div>
      <div className="square">
        <div className="circle"></div>
        <span className="square-value">232</span>
        <span className="square-title">CASH FLOW</span>
      </div>
      <div className="square">
        <div className="circle"></div>
        <span className="square-value">232</span>
        <span className="square-title">SPENDING</span>
      </div>
    </div>
  );
};

export default Scoreboard;
