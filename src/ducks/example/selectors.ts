import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { isProcessing, pure } from '../../common/store/helpers';

export const selectUsersData = createSelector(
  (state: RootState) => !isProcessing(state.example) && state.example,
  pure
);

export const selectIsGetUsersProcessing = (state: RootState) =>
  isProcessing(state.example);
