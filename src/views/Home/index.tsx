import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsGetUsersProcessing } from 'ducks/example/selectors';

import { exampleSlice } from 'ducks/example/slice';

import styles from './index.module.scss';

export const HomeView = () => {
  const dispatch = useDispatch();
  const isProcessing = useSelector(selectIsGetUsersProcessing);

  console.log(isProcessing);

  useEffect(() => {
    dispatch(exampleSlice.actions.request());
  }, []);

  return <div className={styles.home}>Home page</div>;
};
