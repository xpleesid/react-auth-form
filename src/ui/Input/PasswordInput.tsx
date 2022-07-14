import React from 'react';
import { EyeIcon } from 'ui/Icon/Eye';
import { EyeClosedIcon } from 'ui/Icon/EyeClosed';
import { Input, InputProps } from './Input';
import style from './PasswordInput.module.css';

type PasswordInputProps = Exclude<InputProps, 'type'>;

export const PasswordInput = ({ ...rest }: PasswordInputProps) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [showPassword, setShowPassword] = React.useState(false);

  const restoreCaretPosition = () => {
    if (inputRef.current) {
      const val = inputRef.current.value;
      inputRef.current.setSelectionRange(val.length, val.length);
      inputRef.current.value = '';
      inputRef.current.value = val;
    }
  };

  const handleEyeClick = React.useCallback(() => {
    setShowPassword((value) => !value);
    inputRef.current?.focus();
  }, []);

  React.useEffect(() => {
    restoreCaretPosition();
  }, [showPassword]);

  return (
    <div className={style.wrapper}>
      <Input
        type={showPassword ? 'text' : 'password'}
        ref={inputRef}
        {...rest}
        rightIcon={
          <button type="button" className={style.iconBtn} onClick={handleEyeClick} aria-hidden="true">
            {showPassword ? <EyeIcon /> : <EyeClosedIcon />}
          </button>
        }
      />
    </div>
  );
};
