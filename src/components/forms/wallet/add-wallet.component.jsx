import React, { Component } from "react";
import { connect } from "react-redux";

import { createWalletDocument } from "../../../firebase/firebase-utils";

import FormInput from "../form-input/form-input.component";
import FormSelect from "../form-select/form-select.component";
import CustomButton from "../../custom-button/custom-button.component";

import logo from "../../../assets/img/logo.png";

import "./add-wallet.styles.css";

class AddWallet extends Component {
  state = {
    walletName: "",
    currency: "",
    cashBalance: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { id } = this.props.currentUser;

    await createWalletDocument(id, this.state);
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
          <FormSelect name="currency" onChange={this.handleChange} />
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

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(AddWallet);
