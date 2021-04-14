import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import {
  selectCurrentInterval,
  selectIntervals,
} from "../../redux/wallet/wallet.selectors";

import { changeCurrentInterval } from "../../redux/wallet/wallet.actions";

import { getMonthName } from "../../utils/date";

import "./interval-date.styles.css";

const handlePrevMonth = (currentInterval, changeCurrentInterval) => {
  changeCurrentInterval({
    count: currentInterval.count + 1,
    month: getMonthName(new Date().getMonth() - (currentInterval.count + 1)),
  });
};

const handleNextMonth = (currentInterval, changeCurrentInterval) => {
  changeCurrentInterval({
    count: currentInterval.count - 1,
    month: getMonthName(new Date().getMonth() - (currentInterval.count - 1)),
  });
};

const IntervalDate = ({
  currentInterval,
  intervals,
  changeCurrentInterval,
}) => {
  let prevExist =
    intervals && intervals.length - 1 === currentInterval.count
      ? "disable-button"
      : null;
  let nextExist =
    currentInterval && currentInterval.count === 0 ? "disable-button" : null;
  return (
    <div className="interval">
      <i
        className={"fas fa-arrow-left interval-arrow " + prevExist}
        onClick={() => handlePrevMonth(currentInterval, changeCurrentInterval)}
      ></i>
      <div className="interval-title">
        <span>{currentInterval.month}</span>
      </div>
      <i
        className={"fas fa-arrow-right interval-arrow " + nextExist}
        onClick={() => handleNextMonth(currentInterval, changeCurrentInterval)}
      ></i>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentInterval: selectCurrentInterval,
  intervals: selectIntervals,
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentInterval: (interval) =>
    dispatch(changeCurrentInterval(interval)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IntervalDate);
