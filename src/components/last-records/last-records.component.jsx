import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { toDateTime, getYMHMS } from "../../utils/date";

import { Link } from "react-router-dom";

import {
  selectSpending,
  selectExpense,
} from "../../redux/wallet/wallet.selectors";

import "./last-records.styles.css";

const LastRecords = ({ expense, spending }) => {
  return (
    <React.Fragment>
      <div className="title-wraper">
        <h4 className="summary-title">Last Records</h4>
        <Link to="/records" className="records-link">Records</Link>
      </div>
      <div className="cp-wraper">
        <div className="cf-header-cont">
          <p>Last Month</p>
          <span>{spending ? spending : 0} $</span>
        </div>
        {expense ? (
          expense.map((item) => (
            <div className="lr-summary-wrapper" key={item.date}>
              <div className="cf-label">
                <i
                  className={"fas last-rec-icon " + item.icon}
                  style={{ background: `${item.color}` }}
                ></i>
                <span>
                  {item.category.charAt(0).toUpperCase() +
                    item.category.slice(1)}
                </span>{" "}
                <span style={{ color: "#fe3b2c" }}>- {item.amount} $</span>
              </div>
              <span className="lr-summary-date">
                {getYMHMS(toDateTime(item.date.seconds))}
              </span>
            </div>
          ))
        ) : (
          <h2>No Records</h2>
        )}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  spending: selectSpending,
  expense: selectExpense,
});

export default connect(mapStateToProps)(LastRecords);
