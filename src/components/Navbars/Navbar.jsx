import React from "react";
import {
  Navbar,
  Container,
  Nav,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Redirect } from "react-router-dom";

import { auth } from "../../firebase/firebase-utils";

import "./navbar.styles.css";

const BasicNavbar = () => {
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
                <Dropdown.Item href="#/action-1">
                  <i className="fas fa-wallet wallet-icon"></i> Wallet 1
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <i className="fas fa-wallet wallet-icon"></i> Wallet 2
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <i className="fas fa-plus"></i> Something else
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
              <Nav.Link className="m-0" href="/" onClick={() => auth.signOut()}>
                <span className="no-icon">Log out</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BasicNavbar;
