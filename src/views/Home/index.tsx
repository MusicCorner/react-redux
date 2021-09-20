import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectIsGetUsersProcessing,
  selectUsersData,
} from '@ducks/example/selectors';
import img from '@public/svg/circle.svg';
import { exampleSlice } from '@ducks/example/slice';

import styles from './index.module.scss';

export const HomeView = () => {
  const dispatch = useDispatch();
  const isProcessing = useSelector(selectIsGetUsersProcessing);
  const userData = useSelector(selectUsersData);

  useEffect(() => {
    dispatch(exampleSlice.actions.request());
  }, []);

  return (
    <div className={styles.home}>
      {userData?.name}
      {isProcessing && <img src={img} alt="img" />}
    </div>
  );
};
