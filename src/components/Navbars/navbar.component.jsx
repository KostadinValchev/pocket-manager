import React, { Component } from "react";
import {
  Navbar,
  Container,
  Nav,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase-utils";

import { selectCurrentUser } from "../../redux/user/user.selector";
import {
  selectCurrentWallet,
  selectWallets,
} from "../../redux/wallet/wallet.selectors";

import {
  getAllWallets,
  setCurrentWallet,
} from "../../redux/wallet/wallet.actions";

import { getAllWalletsDocuments } from "../../firebase/firebase-wallet-actions";

import RecordSection from "../record-section/record-section.component";

import "./navbar.styles.css";

class BasicNavbar extends Component {
  async componentDidMount() {
    const { setCurrentWallet, getAllWallets } = this.props;
    const wallets = await getAllWalletsDocuments(this.props.currentUser.id);
    setCurrentWallet(wallets[0]);
    getAllWallets(wallets);
  }
  render() {
    const { wallets, currentWallet, setCurrentWallet } = this.props;
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto navbar-nav">
              <Nav.Item className="nav-item">
                <RecordSection />
              </Nav.Item>
              <Nav.Item className="nav-item">
                <DropdownButton
                  id="dropdown-basic-button"
                  variant="Secondary"
                  title="Wallets"
                >
                  {wallets.map((wallet, key) => {
                    return (
                      <Dropdown.Item
                        key={key}
                        active={currentWallet.id === wallet.id ? true : false}
                        onClick={() => setCurrentWallet(wallet)}
                      >
                        <i className="fas fa-wallet wallet-icon"></i>{" "}
                        {wallet.walletName}
                      </Dropdown.Item>
                    );
                  })}
                  <Dropdown.Item
                    href="/add-wallet"
                    onClick={() => <Redirect to="/add-wallet" />}
                  >
                    <i className="fas fa-plus"></i> Add Wallet
                  </Dropdown.Item>
                </DropdownButton>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link
                  className="m-0"
                  href="/account"
                  onClick={() => <Redirect to="/account" />}
                >
                  <span className="no-icon">Account</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <Nav.Link
                  className="m-0"
                  href="/"
                  onClick={() => auth.signOut()}
                >
                  <span className="no-icon">Log out</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  currentWallet: selectCurrentWallet,
  wallets: selectWallets,
});

const mapDispatchToProps = (dispatch) => ({
  getAllWallets: (wallets) => dispatch(getAllWallets(wallets)),
  setCurrentWallet: (wallet) => dispatch(setCurrentWallet(wallet)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicNavbar);
