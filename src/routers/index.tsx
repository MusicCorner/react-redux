import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ROOT_ROUTES } from '@common/constants/routes';

import { HomeView } from '../views/Home';

export const RootRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROOT_ROUTES.HOME} element={<HomeView />} />
    </Routes>
  </BrowserRouter>
);
