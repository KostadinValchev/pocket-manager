import React, { Component } from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import {
  createWalletDocument,
  createInterval,
} from "../../firebase/firebase-wallet-actions";

import { setCurrentWallet } from "../../redux/wallet/wallet.actions";

import { addWalletToReducer } from "../../redux/wallet/wallet.actions";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectWallets } from "../../redux/wallet/wallet.selectors";

import FormInput from "../../components/forms/form-input/form-input.component";
import FormSelect from "../../components/forms/form-select/form-select.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import logo from "../../assets/img/logo.png";

import { CURRENCY } from "../../utils/wallet-constants";

import "./wallet.styles.css";

class AddWallet extends Component {
  state = {
    walletName: "",
    currency: CURRENCY[0],
    cashBalance: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { currentUser, addWalletToReducer, wallets, setCurrentWallet } = this.props;
    let walletInfo = await createWalletDocument(currentUser.id, {
      startingAmount: this.state.cashBalance,
      current: wallets ? false : true,
      ...this.state,
    });
    await createInterval({ ...walletInfo });
    addWalletToReducer({ ...walletInfo });
    setCurrentWallet(walletInfo);
    this.props.history.push("/");
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="add-wallet-container">
        <h2 className="wallet-title">Create wallet</h2>
        <div className="form-img">
          <img src={logo} alt="..." />
        </div>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="walletName"
            type="text"
            label="Wallet Name"
            value={this.state.walletName}
            onChange={this.handleChange}
            required
          />
          <label className="form-label">Select Base currency</label>
          <FormSelect
            data={CURRENCY}
            name="currency"
            onChange={this.handleChange}
          />
          <span className="info">
            Your base currency should ideally be the one you use most often.
          </span>
          <FormInput
            name="cashBalance"
            type="number"
            label="Cash Balance"
            value={this.state.cashBalance}
            onChange={this.handleChange}
            required
          />
          <span className="info">
            How much cash you have in your physical wallet?
          </span>
          <div className="form-wallet-submit">
            <CustomButton
              style={{ margin: "20px 0", width: "4rem" }}
              type="submit"
            >
              Confirm
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  wallets: selectWallets,
});

const mapDispatchToProps = (dispatch) => ({
  addWalletToReducer: (wallet) => dispatch(addWalletToReducer(wallet)),
  setCurrentWallet: (wallet) => dispatch(setCurrentWallet(wallet)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddWallet);
