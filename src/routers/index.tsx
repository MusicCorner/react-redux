import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ROOT_ROUTES } from '@common/constants/routes';

import { HomeView } from '../views/Home';

export const RootRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path={ROOT_ROUTES.HOME}>
        <HomeView />
      </Route>
    </Switch>
  </BrowserRouter>
);
