import React from "react";

import {
  setPercent,
  setColor,
  setColorBalance,
} from "./scoreboard-circle-utils";

import "./scoreboard-circle.styles.css";

const ScoreboardCircle = ({ startingAmount, value, balance }) => {
  let percent = setPercent(startingAmount, value);
  let color = balance ? setColorBalance(percent) : setColor(percent);

  return (
    <div className={"c100 small p" + percent}>
      <span>{value}$</span>
      <div className="slice">
        <div className="bar" style={{ borderColor: color }}></div>
        <div className="fill" style={{ borderColor: color }}></div>
      </div>
    </div>
  );
};

export default ScoreboardCircle;
