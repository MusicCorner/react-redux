import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Draft } from 'immer';

import {
  isError,
  isProcessing,
  isSuccess,
  _AsyncState,
  _CreateSliceOptions,
} from './createAsyncSlice';

export type _AsyncListState<S, E> = {
  [key: string]: _AsyncState<S, E> | undefined;
};

export interface DefaultListPayload {
  id: string;
}

export interface DefaultListSuccessPayload<T> extends DefaultListPayload {
  value: T;
}

export interface DefaultListErrorPayload<T> extends DefaultListPayload {
  error: T;
}

export const createAsyncListSlice = <
  RequestPayload extends DefaultListPayload = DefaultListPayload,
  SuccessValue = unknown,
  ErrorValue = string,
  SuccessPayload extends DefaultListSuccessPayload<SuccessValue> = DefaultListSuccessPayload<SuccessValue>,
  ErrorPayload extends DefaultListErrorPayload<ErrorValue> = DefaultListErrorPayload<ErrorValue>
>(
  options: _CreateSliceOptions<_AsyncListState<SuccessValue, ErrorValue>>
) => {
  const initialState: _AsyncListState<SuccessValue, ErrorValue> = {
    // [id]: {
    // 	isProcessing: false,
    // 	isSuccess: false,
    // 	error: null,
    // 	value: null
    // }
  };

  return {
    ...createSlice({
      ...options,
      initialState: {
        ...initialState,
        ...options.initialState,
      },
      name: `async/${options.name}`,
      reducers: {
        reset: (state, action: PayloadAction<Draft<DefaultListPayload>>) => {
          const { id } = action.payload;

          state[id] = {
            ...state[id],
            isProcessing: false,
            isSuccess: false,
            error: null,
            value: null,
          };
        },
        request: (state, action: PayloadAction<Draft<RequestPayload>>) => {
          const { id } = action.payload;

          state[id] = {
            ...state[id],
            value: state[id]?.value || null,
            isProcessing: true,
            isSuccess: false,
            error: null,
          };
        },
        success: (state, action: PayloadAction<Draft<SuccessPayload>>) => {
          const { id, value } = action.payload;

          state[id] = {
            ...state[id],
            value,
            isProcessing: false,
            isSuccess: true,
            error: null,
          };
        },
        error: (state, action: PayloadAction<Draft<ErrorPayload>>) => {
          const { id, error } = action.payload;

          state[id] = {
            ...state[id],
            value: state[id]?.value || null,
            error,
            isProcessing: false,
            isSuccess: false,
          };
        },
        ...options.reducers,
      },
    }),
    actionNames: {
      request: `async/${options.name}/request`,
      success: `async/${options.name}/success`,
      error: `async/${options.name}/error`,
    },
  };
};

export const isListItemProcessing = (
  listAsyncState?: _AsyncListState<unknown, unknown>,
  payload?: DefaultListPayload
) =>
  !!(
    payload?.id &&
    listAsyncState &&
    listAsyncState[payload?.id] &&
    isProcessing(listAsyncState[payload.id] as _AsyncState<unknown, unknown>)
  );

export const isListItemSuccess = (
  listAsyncState?: _AsyncListState<unknown, unknown>,
  payload?: DefaultListPayload
) =>
  !!(
    payload?.id &&
    listAsyncState &&
    listAsyncState[payload?.id] &&
    isSuccess(listAsyncState[payload.id] as _AsyncState<unknown, unknown>)
  );

export const isListItemError = (
  listAsyncState?: _AsyncListState<unknown, unknown>,
  payload?: DefaultListPayload
) =>
  !!(
    payload?.id &&
    listAsyncState &&
    listAsyncState[payload?.id] &&
    isError(listAsyncState[payload.id] as _AsyncState<unknown, unknown>)
  );
