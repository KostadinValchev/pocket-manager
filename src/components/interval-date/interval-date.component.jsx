import React from "react";

import { connect } from "react-redux";

import "./interval-date.styles.css";

const IntervalDate = ({ currentInterval }) => {
  return (
    <div className="interval">
      <i className="fas fa-arrow-left interval-arrow"></i>
      <div className="interval-title">
        <span>{currentInterval.month}</span>
      </div>
      <i
        className="fas fa-arrow-right interval-arrow"
        style={{ pointerEvents: "none", color: "grey" }}
      ></i>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentInterval: state.wallet.currentInterval,
});

export default connect(mapStateToProps)(IntervalDate);
