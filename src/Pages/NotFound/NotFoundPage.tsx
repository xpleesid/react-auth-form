import React from 'react';
import { Text } from '@eo-locale/react';
import { Link } from 'react-router-dom';
import style from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <div className={style.wrapper}>
      <h1>
        <Text id="pages.notFound.title" />
      </h1>
      <p className={style.description}>
        <Text id="pages.notFound.description1" />
      </p>
      <p className={style.description}>
        <Text id="pages.notFound.description2" />
      </p>
      <Link className={style.link} to="/">
        ← <Text id="forms.recoverPassword.returnToMainPage" />
      </Link>
    </div>
  );
};
