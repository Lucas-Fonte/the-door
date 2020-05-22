import React from 'react';
import { Switch, Route as PublicRoute, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Door from '../layouts/Door';
import Inside from '../layouts/Inside';

export default function Routes() {
  return (
    <Switch>
      <PublicRoute path="/" component={Door} />
      <PrivateRoute path="/inside" component={Inside} />
      <Redirect path="*" to="/" />
    </Switch>
  );
}
