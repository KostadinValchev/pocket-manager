import React from "react";

import FormInput from "../form-input/form-input.component";
import FormSelect from "../form-select/form-select.component";
import CustomButton from "../../custom-button/custom-button.component";

import logo from "../../../assets/img/logo.png";


import "./add-wallet.styles.css";

const AddWallet = () => {
  return (
    <div className="add-wallet-container">
      <h2 className="wallet-title">Create wallet</h2>
      <div className="form-img">
              <img
                src={logo}
                alt="..."
              />
            </div>
      <form> 
        <FormInput name="name" type="text" label="Wallet Name" />
        <label className="form-label">Select Base currency</label>
        <FormSelect />
        <span className="info">
          Your base currency should ideally be the one you use most often.
        </span>
        <FormInput name="cash-balance" type="number" label="Cash Balance" />
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
};

export default AddWallet;
