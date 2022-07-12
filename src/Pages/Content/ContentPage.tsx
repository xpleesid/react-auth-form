import React from 'react';
import { Text } from '@eo-locale/react';
import style from './ContentPage.module.css';

export const ContentPage = () => {
  return (
    <div className={style.wrapper}>
      <h1>
        <Text id="pages.content.title" />
      </h1>
    </div>
  );
};
