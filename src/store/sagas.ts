import { all } from '@redux-saga/core/effects';

import { exampleSagas } from '@ducks/example/example.sagas';

export function* sagas() {
  yield all([exampleSagas()]);
}
