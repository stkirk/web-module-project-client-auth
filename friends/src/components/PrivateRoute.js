import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          console.log("token found rendering protected route");
          return <Component {...props} />;
        } else {
          console.log("no token found, redirect to login");
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
