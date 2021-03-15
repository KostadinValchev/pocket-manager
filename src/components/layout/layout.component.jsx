import React from "react";
import { Switch, Redirect } from "react-router-dom";

import Sidebar from "../sidebar/Sidebar.component";
import Footer from "../footer/Footer.component";
import BasicNavbar from "../navbars/Navbar";

import routes from "../../routes";
import { getRoutes } from "./layout.utils";

const Layout = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <BasicNavbar />
      <div className="main-panel">
        <Switch>
          {getRoutes(routes)}
          <Redirect from="/" to="/summary" />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
