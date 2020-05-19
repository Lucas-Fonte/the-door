import React from 'react';
import { Switch, Route as PublicRoute, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Door from '../layouts/Door';
import Inside from '../layouts/Inside';

export default function Routes() {
  return (
    <Switch>
      <PublicRoute path="/door" component={Door} />
      <PrivateRoute path="/door/inside" component={Inside} />
      <Redirect path="*" to="/door" />
    </Switch>
  );
}
