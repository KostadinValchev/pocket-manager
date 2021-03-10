import React, { Component } from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Sidebar from "./components/sidebar/Sidebar.component";
import Footer from "./components/footer/Footer.component";
import BasicNavbar from "./components/navbars/Navbar";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import routes from "./routes";

import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          const { email, displayName } = snapShot.data();
          setCurrentUser({
            id: snapShot.id,
            email,
            displayName,
          });
        });
      } else {
        setCurrentUser(userAuth);
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
          render={(props) => <prop.component {...props} />}
          key={key}
        />
      );
    });
  }

  render() {
    return (
      <div className="wrapper">
        {!this.props.currentUser ? (
          <SignInAndSignUpPage />
        ) : (
          <React.Fragment>
            <Sidebar />
            <BasicNavbar />
            <div className="main-panel">
              <Switch>
                {this.getRoutes(routes)}
                <Redirect from="/" to="/summary" />
              </Switch>
            </div>
            <Footer />
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
