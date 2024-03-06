import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const isLoggedIn = useSelector((state) => state.auth.token);
    console.log(isLoggedIn);

    if (!isLoggedIn) {
      return <Redirect to="/login" />;
    }
    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
