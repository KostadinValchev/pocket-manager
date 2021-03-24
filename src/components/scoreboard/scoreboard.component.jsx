import React from "react";

import "./scoreboard.styles.css";

const Scoreboard = () => {
  return (
    <div class="scoreboard-container"  data-anim="base wrapper">
      <div class="square">
        <div class="circle" data-anim="base right"></div>
        <span className="square-value">1.4k</span>
        <span className="square-title">Салдо</span>
      </div>
      <div class="square">
        <div class="circle"></div>
        <span className="square-value">232</span>
        <span className="square-title">Паричен поток</span>
      </div>
      <div class="square">
        <div class="circle"></div>
        <span className="square-value">232</span>
        <span className="square-title">Разходи</span>
      </div>
    </div>
  );
};

export default Scoreboard;
