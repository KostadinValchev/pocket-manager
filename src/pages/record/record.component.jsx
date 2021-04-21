import React, { Component } from "react";

import { Container, Row } from "react-bootstrap";

import { connect } from "react-redux";

import { selectCurrentWallet } from "../../redux/wallet/wallet.selectors";

import FormInput from "../../components/forms/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomDropDownButton from "../../components/custom-dropdown-button/custom-dropdown-button.component";
import FormTextArea from "../../components/forms/form-textarea/form-textarea.component";
import CustomButtonGroup from "../../components/custom-button-group/custom-button-group.component";
import { RECORD_TYPE } from "./record-utils";

import { addRecord } from "../../firebase/firebase-wallet-actions";

import { CATEGORIES } from "../../utils/category";

import "./record.styles.css";

class Record extends Component {
  state = {
    recordColor: "#FF0000",
    color: "",
    recordType: "expense",
    amount: 0,
    category: "",
    note: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const wid = this.props.currentWallet.id;
    const record = this.state;
    record.amount = Number(record.amount);

    await addRecord(wid, record, new Date());

    this.setState({
      color: "#FF0000",
      recordType: "expense",
      amount: 0,
      category: "",
      note: "",
    });

    this.props.history.push("/summary");
  };

  handleRecordType = (type, color) => {
    if (!type || !color) return;

    this.setState({ recordType: type, recordColor: color });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleCategory = (category, color) => {
    if (!category || !color) return;

    this.setState({
      category: category.charAt(0).toLowerCase() + category.slice(1),
      color,
    });
  };

  render() {
    const { amount } = this.state;
    return (
      <Container className="add-wallet-container">
        <h2 className="wallet-title">Add Record</h2>
        <form onSubmit={this.handleSubmit}>
          <Row
            className="main-data-wraper text-align-left"
            style={{ border: `2px solid ${this.state.recordColor}` }}
          >
            <div className="record-cbg">
              <CustomButtonGroup
                recordTypes={RECORD_TYPE}
                current={this.state.recordType}
                onRecordType={this.handleRecordType}
                required
              />
            </div>
            <div className="record-md-wraper">
              <FormInput
                name="amount"
                type="number"
                label="Amaunt"
                value={amount}
                handleChange={this.handleChange}
                required
              />
              <CustomDropDownButton
                label="Category"
                name="Choose"
                categories={CATEGORIES}
                customClass="text-align-center"
                handleChange={this.handleCategory}
                required
              />
            </div>
          </Row>
          <FormTextArea
            name="note"
            label="Note"
            value={this.state.note}
            rows={6}
            handleChange={this.handleChange}
          />
          <div className="form-wallet-submit">
            <CustomButton
              style={{ margin: "20px 0", width: "4rem" }}
              type="submit"
            >
              Add
            </CustomButton>
          </div>
        </form>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  currentWallet: selectCurrentWallet(state),
});

export default connect(mapStateToProps)(Record);
