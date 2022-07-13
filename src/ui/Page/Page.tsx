import React from 'react';
import { LanguageSwitcher } from 'ui/LanguageSwitcher/LanguageSwitcher';
import style from './Page.module.css';

interface PageProps {
  children: React.ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return (
    <div className={style.wrapper}>
      <div className={style.switcherWrapper}>
        <LanguageSwitcher />
      </div>
      {children}
    </div>
  );
};
