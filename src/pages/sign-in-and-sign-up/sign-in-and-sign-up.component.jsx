import React from "react";
import SignIn from "../../components/forms/sign-in/sign-in.component";
import SignUp from "../../components/forms/sign-up/sign-up.component";
import "./sign-in-and-sign-up.styles.css";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
