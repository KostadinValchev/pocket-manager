import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import Preload from "./components/preload/preload.component";
import Layout from "./components/layout/layout.component";

import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import { setPreload } from "./redux/app/app.actions";
import { setCurrentUser } from "./redux/user/user.actions";

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
      setPreload({ preload: false });
    }, 600);
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser, preload } = this.props;

    return (
      <React.Fragment>
        {preload === true ? (
          <Preload />
        ) : (
          <div className="wrapper">
            {preload && !currentUser ? <SignInAndSignUpPage /> : <Layout />}
          </div>
        )}
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
