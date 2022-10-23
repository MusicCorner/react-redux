import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import circle from '@public/svg/circle.svg';
import { exampleSlice } from '@ducks/example/example.slice';
import { User } from '@components/User';
import { useAppSelector } from '@common/hooks/useAppSelector';

import styles from './index.module.scss';

export const HomeView = () => {
  const dispatch = useDispatch();
  const isProcessing = useAppSelector(exampleSlice.selectors.isProcessing);
  const { id = '', name = '' } =
    useAppSelector(exampleSlice.selectors.value) || {};

  useEffect(() => {
    dispatch(exampleSlice.actions.request());
  }, []);

  return (
    <div className={styles.home}>
      {isProcessing ? <img src={circle} /> : <User id={id} name={name} />}
    </div>
  );
};
