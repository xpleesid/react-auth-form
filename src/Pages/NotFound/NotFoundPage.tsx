import React from 'react';
import { Text } from '@eo-locale/react';
import style from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <div className={style.wrapper}>
      <h1>
        <Text id="pages.notFound.title" />
      </h1>
    </div>
  );
};
