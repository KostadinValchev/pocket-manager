import React, { Component } from "react";
import { connect } from "react-redux";

import { getWalletDocument } from "../../firebase/firebase-utils";

import { setCurrentWallet } from "../../redux/wallet/wallet.actions";

import AddWallet from "../../components/forms/wallet/add-wallet.component";

class Summary extends Component {
  state = {};

  async componentDidMount() {
    const wallet = await getWalletDocument(this.props.uid);
    this.props.setCurrentWallet(wallet);
  }

  render() {
    const { currentWallet } = this.props;
    return (
      <div className="summary">
        {currentWallet ? <h1>Summary</h1> : <AddWallet />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentWallet: state.wallet.currentWallet,
  uid: state.user.currentUser.id,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentWallet: (wallet) => dispatch(setCurrentWallet(wallet)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
