import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

import Sidebar from "../sidebar/sidebar.component";
import Footer from "../footer/footer.component";
import BasicNavbar from "../navbars/navbar.component";

import routes from "../../routes";
import { getRoutes } from "./layout.utils";

import "./layout.styles.css";

const Layout = ({ history }) => {
  return (
    <React.Fragment>
      <Route component={Sidebar} />
      <Route component={BasicNavbar} />
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
