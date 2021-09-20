import React from 'react';
import { Provider } from 'react-redux';

import { sagaMiddleware } from '@common/store/middlewares';
import { sagas } from '@store/sagas';

import { RootRouter } from './routers';
import { store } from './store';

sagaMiddleware.run(sagas);

export const App = () => {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );
};
