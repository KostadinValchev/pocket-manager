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

import { auth } from "../../firebase/firebase-utils";

import {
  getAllWallets,
  setCurrentWallet,
} from "../../redux/wallet/wallet.actions";

import { getAllWalletsDocuments } from "../../firebase/firebase-wallet-actions";

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

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  currentWallet: state.wallet.currentWallet,
  wallets: state.wallet.wallets,
});

const mapDispatchToProps = (dispatch) => ({
  getAllWallets: (wallets) => dispatch(getAllWallets(wallets)),
  setCurrentWallet: (wallet) => dispatch(setCurrentWallet(wallet)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicNavbar);
