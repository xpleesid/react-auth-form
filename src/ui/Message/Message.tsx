import classNames from 'classnames';
import React from 'react';
import style from './Message.module.css';

interface MessageProps {
  type: 'success' | 'error';
  message: React.ReactNode;
  className?: string;
}

export const Message = ({ type, message, className }: MessageProps) => {
  return (
    <div
      className={classNames(className, style.message, type === 'success' ? style.successMessage : style.errorMessage)}
    >
      {message}
    </div>
  );
};
