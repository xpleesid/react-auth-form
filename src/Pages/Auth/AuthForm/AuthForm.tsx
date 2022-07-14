import classnames from 'classnames';
import React from 'react';
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
      <h2>Войдите, чтобы продолжить</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          aria-describedby="email-hint"
        />
        <p id="email-hint">Enter email in standard format.</p>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          minLength={3}
          maxLength={20}
          pattern="[a-zA-Z0-9]{3,20}"
          required
          aria-describedby="password-hint"
        />
        <p id="password-hint">From 3 to 20 symbols. Allowed symbols: lowercase and uppercase letters, number.</p>

        <input type="submit" value="Login" />
      </form>

      <button type="button">Forgot password?</button>
    </div>
  );
};
