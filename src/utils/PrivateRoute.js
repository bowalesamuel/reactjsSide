import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getSession } from "./helper";
import { AUTH_TOKEN } from '../redux/constants'

export const PrivateRoute = ({ allow, component: Component, ...rest }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  const less = allow ? true : localStorage.getItem("type") !== "NEW_USER";
  return (
    <Route
      {...rest}
      exact
      render={props =>
        less && token && getSession(token) ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/signin", state: { from: props.location } }} />
        )
      }
    />
  );
};
