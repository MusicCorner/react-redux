import { createSelector } from 'reselect';

import { RootState } from '@store';
import { isProcessing, pure } from '@common/store/helpers';

export const selectUsersData = createSelector(
  (state: RootState) => state.example.data,
  pure
);

export const selectIsGetUsersProcessing = (state: RootState) =>
  isProcessing(state.example);
