import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import { getWalletDocument } from "../../firebase/firebase-wallet-actions";

import { setCurrentWallet } from "../../redux/wallet/wallet.actions";

import AddWallet from "../../components/forms/wallet/add-wallet.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { setPreload } from "../../redux/app/app.actions";

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
          <h2>Summary</h2>
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
