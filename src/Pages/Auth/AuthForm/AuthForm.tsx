import classnames from 'classnames';
import React from 'react';
import { Button } from 'ui/Button/Button';
import { Input } from 'ui/Input/Input';
import { PasswordInput } from 'ui/Input/PasswordInput';
import style from './AuthForm.module.css';

interface AuthFormProps {
  className?: string;
}

export const AuthForm = ({ className }: AuthFormProps) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = React.useCallback<React.FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();
    },
    [email, password]
  );

  return (
    <div className={classnames(style.wrapper, className)}>
      <h2 className={style.header}>Войдите, чтобы продолжить</h2>
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

        <PasswordInput
          name="password"
          value={password}
          onChange={(value) => setPassword(value)}
          label="Password"
          hint="From 3 to 20 symbols. Allowed symbols: lowercase and uppercase letters, numbers"
          minLength={3}
          maxLength={20}
          pattern="[a-zA-Z0-9]{3,20}"
          required
        />

        <Button type="submit">Login</Button>
      </form>

      <button type="button">Forgot password?</button>
    </div>
  );
};
