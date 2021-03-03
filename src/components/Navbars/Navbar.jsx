import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./navbar.styles.css";

const BasicNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navbar-nav">
            <Nav.Item className="nav-item">
              <Nav.Link
                className="m-0"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="no-icon">Account</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link
                className="m-0"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
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
