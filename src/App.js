import React, { Component } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar.component";
import Footer from "./components/footer/Footer.component";
import BasicNavbar from "./components/navbars/Navbar";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import routes from "./routes";

import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import "./App.css";

class App extends Component {
  state = {
    user: {
      id: "",
      displayName: "",
      email: "",
      isLogout: true,
    },
  };
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          const { email, displayName } = snapShot.data();
          const user = {
            id: snapShot.id,
            email,
            displayName,
            isLogout: true,
          };
          this.setState({
            user,
          });
        });
      } else {
        const user = {
          id: "",
          displayName: "",
          email: "",
          isLogout: false,
        };
        this.setState({ user });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  getRoutes(routes) {
    return routes.map((prop, key) => {
      return (
        <Route
          path={prop.path}
          render={(props) => <prop.component {...props} key={key} />}
        />
      );
    });
  }

  render() {
    return (
      <div className="wrapper">
        {!this.state.user.isLogout ? (
          <SignInAndSignUpPage />
        ) : (
          <React.Fragment>
            <Sidebar />
            <div className="main-panel">
              <BasicNavbar />
              <Switch>
                {this.getRoutes(routes)}
                <Redirect from="/" to="/summary" />
              </Switch>
              <Footer />
            </div>
          </React.Fragment>
        )}
        {/* <SignInAndSignUpPage /> */}
      </div>
    );
  }
}

export default App;
