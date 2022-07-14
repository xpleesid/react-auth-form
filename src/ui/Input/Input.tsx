import classNames from 'classnames';
import React from 'react';
import style from './Input.module.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value: string;
  onChange: (value: string) => void;
  label: string;
  hint?: string;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef(
  ({ name, onChange, label, hint, rightIcon, ...rest }: InputProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <div className={style.wrapper}>
        <div className={style.labelWrapper}>
          <label className={style.label} htmlFor={name}>
            {label}
          </label>
        </div>

        <div className={style.inputWrapper}>
          <input
            className={classNames(style.input, rightIcon && style.inputWithRightIcon)}
            onChange={(event) => onChange(event.target.value)}
            name={name}
            id={name}
            aria-describedby={`hint-${name}`}
            ref={ref}
            {...rest}
          />
          <div className={style.rightIconWrapper}>{rightIcon}</div>
        </div>

        <p className={style.hint} id={`hint-${name}`}>
          {hint}
        </p>
      </div>
    );
  }
);
