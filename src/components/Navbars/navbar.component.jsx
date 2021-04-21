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
import { getMonthName } from "../../utils/date";

import { selectCurrentUser } from "../../redux/user/user.selector";
import {
  selectCurrentWallet,
  selectWallets,
} from "../../redux/wallet/wallet.selectors";

import {
  changeCurrentInterval,
  getAllWallets,
  setCurrentWallet,
  setIntervals,
} from "../../redux/wallet/wallet.actions";

import {
  getAllWalletsDocuments,
  changeDatabaseCurrentWallet,
  getAllIntervals,
} from "../../firebase/firebase-wallet-actions";

import RecordSection from "../record-section/record-section.component";

import "./navbar.styles.css";

class BasicNavbar extends Component {
  async componentDidMount() {
    const { setCurrentWallet, getAllWallets } = this.props;
    const wallets = await getAllWalletsDocuments(this.props.currentUser.id);
    if (!wallets) {
      this.props.history.push("/add-wallet");
    } else {
      setCurrentWallet(wallets.find((wallet) => wallet.current === true));
      getAllWallets(wallets);
    }
  }

  setAsCurrentWallet = async (specifiedWallet, uid, setCurrentWallet) => {
    changeDatabaseCurrentWallet(specifiedWallet.id, uid);
    setCurrentWallet(specifiedWallet);
    const intervals = await getAllIntervals(specifiedWallet.id);
    this.props.changeCurrentInterval({
      count: 0,
      month: getMonthName(new Date().getMonth()),
    });
    this.props.setIntervals(intervals);
  };
  render() {
    const {
      wallets,
      currentWallet,
      setCurrentWallet,
      currentUser,
    } = this.props;
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto navbar-nav">
            <Nav.Item className="nav-item">
                <Nav.Link
                  className="m-0"
                  href="/add-record"
                  onClick={() => <Redirect to="/add-record" />}
                >
                  <span className="no-icon">Add Record</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <RecordSection />
              </Nav.Item>
              <Nav.Item className="nav-item">
                <DropdownButton
                  id="dropdown-basic-button"
                  variant="Secondary"
                  title="Wallets"
                >
                  { wallets.map((wallet, key) => {
                    const isActive =currentWallet && currentWallet.id === wallet.id
                        ? true
                        : false;
                    return (
                      <Dropdown.Item
                        key={key}
                        active={isActive}
                        onClick={() =>
                          this.setAsCurrentWallet(
                            wallet,
                            currentUser.id,
                            setCurrentWallet
                          )
                        }
                      >
                        <i className="fas fa-wallet wallet-icon "></i>{" "}
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
  setIntervals: (intervals) => dispatch(setIntervals(intervals)),
  changeCurrentInterval: (interval) =>
    dispatch(changeCurrentInterval(interval)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicNavbar);
