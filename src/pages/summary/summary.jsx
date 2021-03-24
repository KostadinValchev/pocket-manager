import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import { getWalletDocument } from "../../firebase/firebase-wallet-actions";

import { setCurrentWallet } from "../../redux/wallet/wallet.actions";

import AddWallet from "../../components/forms/wallet/add-wallet.component";
import CircleChart from "../../components/circle-chart/circle-chart.component";
import IntervalDate from "../../components/interval-date/interval-date.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import Scoreboard from "../../components/scoreboard/scoreboard.component";
import RecordSection from "../../components/record-section/record-section.component"

import { setPreload } from "../../redux/app/app.actions";

import "./summary.styles.css";

const AddWalletWithSpinner = WithSpinner(AddWallet);

class Summary extends Component {
  state = {};

  async componentDidMount() {
    const wallet = await getWalletDocument(this.props.uid);
    this.props.setCurrentWallet(wallet);
    this.props.setPreload(false);
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
                <Col className="content-section"><h2>Record Section</h2></Col>
                <Col className="content-section">
                  <h2>Cash flow</h2>
                </Col>
              </Row>
              <Row>
                <Col className="content-section">
                  <CircleChart />
                </Col>
                <Col className="content-section">
                  <h2>Last Records</h2>
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

const mapStateToProps = (state) => ({
  currentWallet: state.wallet.currentWallet,
  uid: state.user.currentUser.id,
  preload: state.app.preload,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentWallet: (wallet) => dispatch(setCurrentWallet(wallet)),
  setPreload: (value) => dispatch(setPreload(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
