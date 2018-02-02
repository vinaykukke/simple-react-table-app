import React from 'react';
import { Route, Redirect, Switch } from 'react-router';

import Home from 'Scenes/Home';
import * as paths from 'Constants/routes';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={paths.APP_ROOT} component={Home}/>
      <Redirect to={paths.APP_ROOT} />
    </Switch>
  );
};

export default Routes;
