import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import {
  selectStartingAmount,
  selectCashBalance,
  selectCashFlow,
  selectCalculatedExpense,
} from "../../redux/wallet/wallet.selectors";

import { Container, Row, Col } from "react-bootstrap";

import ScoreboardCircle from "../scoreboard-circle/scoreboard-circle.component";

import "./scoreboard.styles.css";

const Scoreboard = ({ startingAmount, cashBalance, cashFlow, spending }) => {
  return (
    <div className="scoreboard-container" data-anim="base wrapper">
      <Container>
        <Row>
          <Col className="scoreboard-circle">
            <ScoreboardCircle
              startingAmount={startingAmount}
              value={cashBalance}
              balance={true}
            />
            <span className="square-title">BALANCE</span>
          </Col>
          <Col className="scoreboard-circle">
            <ScoreboardCircle startingAmount={startingAmount} value={cashFlow} />
            <span className="square-title">CASH FLOW</span>
          </Col>
          <Col className="scoreboard-circle">
            <ScoreboardCircle startingAmount={startingAmount} value={spending} />
            <span className="square-title">SPENDING</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  startingAmount: selectStartingAmount,
  cashBalance: selectCashBalance,
  cashFlow: selectCashFlow,
  spending: selectCalculatedExpense,
});

export default connect(mapStateToProps)(Scoreboard);
