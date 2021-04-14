import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import {
  selectSpending,
  selectExpense,
} from "../../../redux/wallet/wallet.selectors";

import "./cost-preview.styles.css";

const CostPreview = ({ expense, spending }) => {
  return (
    <div className="cp-wraper">
      <div className="cf-header-cont">
        <p>Last Month</p>
        <span>{spending ? spending : 0} $</span>
      </div>
      {expense ?
        expense.map((item) => (
          <React.Fragment key={item.date}>
            <div className="cf-label">
              <span>{item.category}</span> <span>{item.amount}$</span>
            </div>
            <div className="meter" style={{ background: `${item.color}` }}>
              <span></span>
            </div>
          </React.Fragment>
        )) : <h2>No Records</h2>}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  spending: selectSpending,
  expense: selectExpense,
});

export default connect(mapStateToProps)(CostPreview);
