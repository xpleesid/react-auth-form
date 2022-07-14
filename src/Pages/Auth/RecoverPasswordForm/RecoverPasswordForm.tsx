import classnames from 'classnames';
import React from 'react';
import { Button } from 'ui/Button/Button';
import { Input } from 'ui/Input/Input';
import style from './RecoverPasswordForm.module.css';

interface RecoverPasswordFormProps {
  className?: string;
}

export const RecoverPasswordForm = ({ className }: RecoverPasswordFormProps) => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = React.useCallback<React.FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();
    },
    [email]
  );

  return (
    <div className={classnames(style.wrapper, className)}>
      <p className={style.reminder}>We will send recovery link to your email</p>
      <form action="" onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={(value) => setEmail(value)}
          label="Email"
          placeholder="example@mail.com"
          hint="Enter email in standard format"
          required
        />
        <Button type="submit">Send link</Button>
      </form>
    </div>
  );
};
