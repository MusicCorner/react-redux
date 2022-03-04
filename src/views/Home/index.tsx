import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectIsGetUsersProcessing,
  selectUsersData,
} from '@ducks/example/example.selectors';
import circle from '@public/svg/circle.svg';
import { exampleSlice } from '@ducks/example/example.slice';
import { User } from '@components/User';

import styles from './index.module.scss';

export const HomeView = () => {
  const dispatch = useDispatch();
  const isProcessing = useSelector(selectIsGetUsersProcessing);
  const { id, name } = useSelector(selectUsersData);

  useEffect(() => {
    dispatch(exampleSlice.actions.request());
  }, []);

  return (
    <div className={styles.home}>
      {isProcessing ? <img src={circle} /> : <User id={id} name={name} />}
    </div>
  );
};
