import React, { Component } from "react";

import { Container, Row } from "react-bootstrap";

import FormInput from "../../components/forms/form-input/form-input.component";
import FormSelect from "../../components/forms/form-select/form-select.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomDropDownButton from "../../components/custom-dropdown-button/custom-dropdown-button.component";
import FormTextArea from "../../components/forms/form-textarea/form-textarea.component";
import CustomButtonGroup from "../../components/custom-button-group/custom-button-group.component";

import { CATEGORIES } from "../../utils/category";

import "./record.styles.css";

class Record extends Component {
  state = {};
  render() {
    return (
      <Container className="add-wallet-container">
        <h2 className="wallet-title">Add Record</h2>
        <form>
          <Row className="main-data-wraper text-align-left">
            <div className="record-cbg">
              <CustomButtonGroup />
            </div>
            <div className="record-md-wraper">
              <FormInput name="Amount" type="number" label="Amaunt" required />
              <CustomDropDownButton
                label="Category"
                name="Choose"
                categories={CATEGORIES}
                customClass="text-align-center"
                required
              />
            </div>
          </Row>
          <FormTextArea label="Note" rows={6} />
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

export default Record;
