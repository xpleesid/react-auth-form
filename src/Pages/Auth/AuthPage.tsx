import { Text } from '@eo-locale/react';
import React from 'react';
import { AuthForm } from './AuthForm/AuthForm';
import style from './AuthPage.module.css';

export const AuthPage = () => {
  return (
    <div className={style.wrapper}>
      <h1>
        <Text id="pages.auth.title" />
        <AuthForm className={style.authForm} />
      </h1>
    </div>
  );
};
