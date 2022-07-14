import React from 'react';
import { Button } from 'ui/Button/Button';
import { Input } from 'ui/Input/Input';
import { Link } from 'react-router-dom';
import style from './RecoverPasswordForm.module.css';

export const RecoverPasswordForm = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = React.useCallback<React.FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();
    },
    [email]
  );

  return (
    <div className={style.wrapper}>
      <Link className={style.link} to="/">
        ← Return to main page
      </Link>
      <h2 className={style.header}>We'll send recovery link to your email</h2>
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
