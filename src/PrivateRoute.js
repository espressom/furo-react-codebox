import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useFuro } from "furo-react";

function PrivateRoute({ component: Component, ...rest }) {
  const { isLoading, isAuthenticated, loginWithRedirect } = useFuro();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <>Loading...</>
      }
    />
  );
}

export default PrivateRoute;
