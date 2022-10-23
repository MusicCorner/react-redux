import { AsyncState, createAsyncSlice } from 'create-async-slice';

import { ApiError, ApiUser } from '@common/types/apiTypes';

export const exampleSlice = createAsyncSlice<undefined, ApiUser, ApiError>({
  name: 'getUsers',
  selectAsyncState: (state: { users: AsyncState<ApiUser, ApiError> }) =>
    state.users,
});
