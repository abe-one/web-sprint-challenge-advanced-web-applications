import React from "react";
import { Redirect, Route } from "react-router-dom";

import React from "react";

const PrivateRoute = ({ component: Component, ...rest }) => {
  <Route
    {...rest}
    render={() => {
      if (window.localStorage.getItem("tToken")) {
        return;
        <Component />;
      } else {
        return <Redirect to="/login" />;
      }
    }}
  />;
};

export default PrivateRoute;
