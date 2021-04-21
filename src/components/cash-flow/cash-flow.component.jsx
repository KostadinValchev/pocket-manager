import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import {
  selectCashFlow,
  selectCalculatedIncome,
  selectCalculatedExpense,
} from "../../redux/wallet/wallet.selectors";

import { ProgressBar } from "react-bootstrap";

import { setExpenseProgress, setIncomeProgress } from "./cash-flow-utils";

import "./cash-flow.styles.css";

const CashFlow = ({ cashFlow, income, spending }) => {
  return (
    <div className="cf-wraper">
      <div className="cf-header-cont">
        <p>Last 31 days</p>
        <span>-{cashFlow} $</span>
      </div>
      <div className="cf-label">
        <span>Income</span> <span>{income} $</span>
      </div>
      <ProgressBar
        style={{ marginBottom: "1rem" }}
        animated
        variant="success"
        now={setIncomeProgress(income, spending)}
      />
      <div className="cf-label">
        <span>Expense</span> <span>{spending} $</span>
      </div>
      <ProgressBar
        style={{ marginBottom: "1rem" }}
        animated
        variant="danger"
        now={setExpenseProgress(spending, income)}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cashFlow: selectCashFlow,
  income: selectCalculatedIncome,
  spending: selectCalculatedExpense,
});

export default connect(mapStateToProps)(CashFlow);
