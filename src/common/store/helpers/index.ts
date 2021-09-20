import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
  ValidateSliceCaseReducers,
} from '@reduxjs/toolkit';
import { Draft } from 'immer';

export interface AsyncState<SuccessPayload, ErrorPayload> {
  isProcessing?: boolean;
  isSuccess?: boolean;
  error?: ErrorPayload | null;
  data?: SuccessPayload | null;
  [key: string]: unknown;
}

export interface _AsyncState<SuccessPayload, ErrorPayload> {
  isProcessing: boolean;
  isSuccess: boolean;
  error: ErrorPayload | null;
  data: SuccessPayload | null;
  [key: string]: unknown;
}

export interface _CreateSliceOptions<State> {
  reducers?: ValidateSliceCaseReducers<State, SliceCaseReducers<State>>;
  initialState?: State;
  name: string;
}

export const createAsyncSlice = <SuccessPayload, ErrorPayload>(
  options: _CreateSliceOptions<AsyncState<SuccessPayload, ErrorPayload>>
) => {
  const initialState: _AsyncState<SuccessPayload, ErrorPayload> = {
    isProcessing: false,
    isSuccess: false,
    error: null,
    data: null,
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
        request: (state) => {
          state.isProcessing = true;
          state.isSuccess = false;
          state.error = null;
        },
        success: (state, action: PayloadAction<Draft<SuccessPayload>>) => {
          state.isProcessing = false;
          state.isSuccess = true;
          state.data = action.payload;
          state.error = null;
        },
        error: (state, action: PayloadAction<Draft<ErrorPayload>>) => {
          state.isProcessing = false;
          state.isSuccess = false;
          state.error = action.payload;
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

export const isProcessing = (asyncState: _AsyncState<unknown, unknown>) =>
  asyncState.isProcessing;

export const isSuccess = (asyncState: _AsyncState<unknown, unknown>) =>
  !asyncState.isProcessing && asyncState.isSuccess;

export const isError = (asyncState: _AsyncState<unknown, unknown>) =>
  !asyncState.isProcessing && !!asyncState.error;

export const pure = <T>(state: T) => state;
