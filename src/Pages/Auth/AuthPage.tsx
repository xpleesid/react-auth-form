import { Text } from '@eo-locale/react';
import React from 'react';
import style from './AuthPage.module.css';
import { SigninForm } from './SigninForm/SigninForm';

export const AuthPage = () => {
  return (
    <div className={style.wrapper}>
      <h1>
        <Text id="pages.auth.title" />
        <SigninForm className={style.authForm} />
      </h1>
    </div>
  );
};
