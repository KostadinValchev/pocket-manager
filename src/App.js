import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import "./App.css";

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import WithSpinner from "./components/with-spinner/with-spinner.component";
import Layout from "./components/layout/layout.component";

import { auth } from "./firebase/firebase-utils";
import { createUserProfileDocument } from "./firebase/firebase-user-actions";

import { setPreload } from "./redux/app/app.actions";
import { setCurrentUser } from "./redux/user/user.actions";

const SignInAndSignUpPageWithSpinner = WithSpinner(SignInAndSignUpPage);

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, setPreload } = this.props;
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
    setTimeout(() => {
      setPreload(false);
    }, 2000);
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser, preload } = this.props;
    return (
      <React.Fragment>
        <div className="wrapper">
          {!currentUser ? (
            <SignInAndSignUpPageWithSpinner isLoading={preload} />
          ) : (
            <Route component={Layout} />
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  preload: state.app.preload,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setPreload: (value) => dispatch(setPreload(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
