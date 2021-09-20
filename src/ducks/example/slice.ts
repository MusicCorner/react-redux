import { ApiError, ApiUser } from '@common/types/apiTypes';
import { AsyncState, createAsyncSlice } from '@common/store/helpers';

export interface ExampleState extends AsyncState<ApiUser, ApiError> {
  value: number;
}

const initialState: ExampleState = {
  value: 0,
};

export const exampleSlice = createAsyncSlice<ApiUser, ApiError>({
  name: 'getUsers',
  initialState,
});
