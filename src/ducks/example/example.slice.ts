import { ApiError, ApiUser } from '@common/types/apiTypes';
import { createAsyncSlice } from '@common/store/helpers/createAsyncSlice';

export const exampleSlice = createAsyncSlice<undefined, ApiUser, ApiError>({
  name: 'getUsers',
});
