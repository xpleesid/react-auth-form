import classNames from 'classnames';
import React from 'react';
import style from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}
export const Button = ({ children, variant = 'primary', ...rest }: ButtonProps) => {
  return (
    <button
      className={classNames(style.button, {
        [style.primaryBtn]: variant === 'primary',
        [style.secondaryBtn]: variant === 'secondary',
        [style.ghostBtn]: variant === 'ghost',
      })}
      {...rest}
    >
      {children}
    </button>
  );
};
