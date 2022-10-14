import { createSelector } from 'reselect';

import { RootState } from '@store';
import { ApiUser } from '@common/types/apiTypes';
import { isProcessing, pure } from '@common/store/helpers/createAsyncSlice';

export const selectUsersData = createSelector(
  (state: RootState) => state.example.value || ({} as ApiUser),
  pure
);

export const selectIsGetUsersProcessing = (state: RootState) =>
  isProcessing(state.example);
