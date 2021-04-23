import React, { Component } from "react";
import { connect } from "react-redux";

import { Container, Row, Col } from "react-bootstrap";

import { createStructuredSelector } from "reselect";

import {
  getWalletDocument,
  getAllIntervals,
} from "../../firebase/firebase-wallet-actions";

import { selectUserId } from "../../redux/user/user.selector";
import { selectCurrentWallet } from "../../redux/wallet/wallet.selectors";
import { selectIntervals } from "../../redux/wallet/wallet.selectors";

import { setIntervals } from "../../redux/wallet/wallet.actions";

import IntervalDate from "../../components/interval-date/interval-date.component";
import Scoreboard from "../../components/scoreboard/scoreboard.component";
// import RecordSection from "../../components/record-section/record-section.component";
import CustomLineChart from "../../components/custom-line-chart/custom-line-chart.component";
import CustomPieChart from "../../components/custom-pie-chart/custom-pie-chart.component";
import CashFlow from "../../components/cash-flow/cash-flow.component";
import LastRecords from "../../components/last-records/last-records.component";

import "./summary.styles.css";

class Summary extends Component {
  state = {};

  async componentDidMount() {
    const wallet = await getWalletDocument(this.props.uid);
    if (!wallet) {
      this.props.history.push("/add-wallet");
    } else {
      const intervals = await getAllIntervals(this.props.currentWallet.id);
      this.props.setIntervals(intervals);
    }
  }

  render() {
    const { currentWallet } = this.props;
    return (
      <div className="summary">
        {currentWallet && (
          <React.Fragment>
            <IntervalDate />
            <Container className="content-wraper">
              <Row>
                <Col className="content-section custom-box-shadow">
                  <h4 className="summary-title">Scoreboard</h4>
                  <Scoreboard />
                </Col>
                <Col className="costs-section custom-box-shadow">
                  <h4 className="summary-title">Last Records</h4>
                  <LastRecords />
                </Col>
                <Col className="cash-flow-section custom-box-shadow">
                  <h4 className="summary-title">Cash flow</h4>
                  <CashFlow />
                </Col>
              </Row>
              <Row>
                <Col className="content-section custom-box-shadow">
                  <h4 className="summary-title">Chart</h4>
                  <CustomPieChart />
                </Col>
                <Col className="content-section center-section custom-box-shadow">
                  <CustomLineChart />
                </Col>
              </Row>
            </Container>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentWallet: selectCurrentWallet,
  uid: selectUserId,
  categories: selectIntervals,
});

const mapDispatchToProps = (dispatch) => ({
  setIntervals: (intervals) => dispatch(setIntervals(intervals)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
