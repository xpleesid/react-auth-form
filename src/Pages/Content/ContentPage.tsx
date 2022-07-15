import React from 'react';
import { Text } from '@eo-locale/react';
import { Button } from 'ui/Button/Button';
import { getLoggedInUserEmailOrNull, logoutUser } from 'services/AuthService/AuthService';
import style from './ContentPage.module.css';

export const ContentPage = () => {
  return (
    <div className={style.wrapper}>
      <h1>
        <Text id="pages.content.email" />: {getLoggedInUserEmailOrNull()}
      </h1>
      <p className={style.description}>
        <Text id="pages.content.description" />
      </p>
      <Button onClick={logoutUser} className={style.button}>
        <Text id="pages.content.logoutText" />
      </Button>
    </div>
  );
};
