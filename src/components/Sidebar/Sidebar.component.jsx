import React from "react";
import { Nav, NavLink } from "react-bootstrap";

import logo from "../../assets/img/logo.png";

import "./sidebar.style.css";

const Sidebar = ({ history }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-background" />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a href="/" className="simple-text logo-mini mx-1">
            <div className="logo-img">
              <img src={logo} alt="..." />
            </div>
          </a>
          <a className="simple-text" href="/">
            Pocket Manager
          </a>
        </div>
        <Nav>
          <ul>
            <li>
              <NavLink
                className="nav-link"
                onClick={() => history.push("/summary")}
              >
                <i className="fas fa-chart-line"></i>
                <p>Summary</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                onClick={() => history.push("/records")}
              >
                <i className="fas fa-history" />
                <p>Records</p>
              </NavLink>
            </li>
          </ul>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
