import { takeLatest, put, delay } from 'redux-saga/effects';

import { exampleSlice } from './example.slice';

function* getUsersSaga() {
  yield delay(1000);
  yield put(exampleSlice.actions.success({ id: 'test', name: 'test name' }));
}

export function* exampleSagas() {
  yield takeLatest(exampleSlice.actions.request, getUsersSaga);
}
