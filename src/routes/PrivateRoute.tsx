import React from 'react';
import {
  Route, Redirect, RouteProps,
} from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
    component: React.FC;
}
const PrivateRoute = ({
  component: Component,
  location,
  ...rest
}: PrivateRouteProps) => {
  const { canGetInside }: any = location?.state || {};

  return (
    <Route
      {...rest}
      render={() => (canGetInside ? <Component /> : <Redirect to="/door" />)}
    />
  );
};

export default PrivateRoute;
