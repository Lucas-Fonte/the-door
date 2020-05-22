import React from 'react';
import {
  Route, Redirect, RouteProps,
} from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
    component: React.FC;
}
const PrivateRoute = ({
  component: Component,
  location: { state: privateRouteState },
  ...rest
}: PrivateRouteProps) => {
  const { canGetInside } = privateRouteState || {};

  return (
    <Route
      {...rest}
      render={() => (canGetInside ? <Component /> : <Redirect to="/" />)}
    />
  );
};

export default PrivateRoute;
