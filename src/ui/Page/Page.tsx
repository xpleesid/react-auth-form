import React from 'react';
import style from './Page.module.css';

interface PageProps {
  children: React.ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return <div className={style.wrapper}>{children}</div>;
};
