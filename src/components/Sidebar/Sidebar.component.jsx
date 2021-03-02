import React from "react";
import { Nav, NavLink } from "react-bootstrap";
import "./sidebar.style.css";

const Sidebar = () => {
  return (
    <div className="sidebar" >
      <div
        className="sidebar-background"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/wall-wallpaper-concrete-colored-painted-textured-concept_53876-31799.jpg?size=626&ext=jpg)",
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a href="/" className="simple-text logo-mini mx-1">
            <div className="logo-img">
              <img
                src="https://img.favpng.com/24/1/14/test-case-logo-software-testing-engineering-use-case-png-favpng-6eTyq7U0v5mmDsfZB8BeG0MgV.jpg"
                alt="..."
              />
            </div>
          </a>
          <a
            className="simple-text"
            href="/"
          >
            Pocket Manager
          </a>
        </div>
        <Nav>
          <ul>
            <li className="active">
              <NavLink to="/" className="nav-link" activeClassName="active">
                {/* <i className={prop.icon} /> */}
                <p>Lorem, ipsum.</p>
              </NavLink>
            </li>
            <li className="active">
              <NavLink to="/" className="nav-link" activeClassName="active">
                {/* <i className={prop.icon} /> */}
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
