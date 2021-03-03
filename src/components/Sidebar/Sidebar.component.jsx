import React from "react";
import { Nav, NavLink } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import "./sidebar.style.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-background" />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a href="/" className="simple-text logo-mini mx-1">
            <div className="logo-img">
              <img
                src={logo}
                alt="..."
              />
            </div>
          </a>
          <a className="simple-text" href="/">
            Pocket Manager
          </a>
        </div>
        <Nav>
          <ul>
            <li>
              <NavLink to="/" className="nav-link">
                <i className="fas fa-wallet"></i>
                <p>Lorem, ipsum.</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav-link">
                <i className="fas fa-wallet" />
                <p>Lorem, ipsum.</p>
              </NavLink>
            </li>
          </ul>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
