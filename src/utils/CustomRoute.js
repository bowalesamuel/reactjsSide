import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const CustomRoute = (props) => {
  const [returnedRoute, setReturnedRoute] = useState("");
  useEffect(() => {
    switch (props.condition) {
      case "completeRegistration":
        return setReturnedRoute(
          props.user.boarded === true ? (
            <Route {...props} />
          ) : (
            <Redirect to="/app/onboarding" />
          )
        );
      default:
        return setReturnedRoute(<Route {...props} />);
    }
  }, [props.user]);
  return <>{returnedRoute}</>;
};

const mapStateToProps = (state) => ({
    user: state.user.user,
});
export default connect(mapStateToProps, null)(CustomRoute);
