import { RootState } from '@store';
import { ApiUser } from '@common/types/apiTypes';

export const selectUsersData = (state: RootState) =>
  state.example.value || ({} as ApiUser);
