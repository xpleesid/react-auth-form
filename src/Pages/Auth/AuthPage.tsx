import { Text } from '@eo-locale/react';
import React from 'react';
import style from './AuthPage.module.css';

export const AuthPage = () => {
  return (
    <div className={style.wrapper}>
      <h1>
        <Text id="pages.auth.title" />
      </h1>
    </div>
  );
};
