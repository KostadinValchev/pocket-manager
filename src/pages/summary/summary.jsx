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
import { selectPreload } from "../../redux/app/app.selector";

import { setIntervals } from "../../redux/wallet/wallet.actions";

import AddWallet from "../../components/forms/wallet/add-wallet.component";
import IntervalDate from "../../components/interval-date/interval-date.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import Scoreboard from "../../components/scoreboard/scoreboard.component";
// import RecordSection from "../../components/record-section/record-section.component";
import CustomLineChart from "../../components/custom-line-chart/custom-line-chart.component";
import CustomPieChart from "../../components/custom-pie-chart/custom-pie-chart.component";
import CashFlow from "../../components/cash-flow/cash-flow.component";
import CostPreview from "../../components/cost-category/cost-preview/cost-preview.component";

import "./summary.styles.css";

const AddWalletWithSpinner = WithSpinner(AddWallet);

class Summary extends Component {
  state = {};

  async componentDidMount() {
    const wallet = await getWalletDocument(this.props.uid);
    const intervals = await getAllIntervals(wallet.id);
    this.props.setIntervals(intervals);
  }

  render() {
    const { currentWallet, preload } = this.props;
    return (
      <div className="summary">
        {currentWallet ? (
          <React.Fragment>
            <IntervalDate />
            <Container className="content-wraper">
              <Row>
                <Col className="content-section">
                  <Scoreboard />
                </Col>
                <Col className="costs-section">
                  <h2>Costs By Category</h2>
                  <CostPreview />
                </Col>
                <Col className="cash-flow-section">
                  <h2>Cash flow</h2>
                  <CashFlow />
                </Col>
              </Row>
              <Row>
                <Col className="content-section">
                  <h2>Chart</h2>
                  <CustomPieChart />
                </Col>
                <Col className="content-section center-section">
                  <h2>Last Week</h2>
                  <CustomLineChart />
                </Col>
              </Row>
            </Container>
          </React.Fragment>
        ) : (
          <AddWalletWithSpinner isLoading={preload} />
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentWallet: selectCurrentWallet,
  uid: selectUserId,
  preload: selectPreload,
});

const mapDispatchToProps = (dispatch) => ({
  setIntervals: (intervals) => dispatch(setIntervals(intervals)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
