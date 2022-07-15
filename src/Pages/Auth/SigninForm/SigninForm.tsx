import axios from 'axios';
import React from 'react';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { SigninParams } from 'services/ApiService/ApiService.types';
import { extractMessageFromError } from 'services/ErrorService/ErrorService';
import { Button } from 'ui/Button/Button';
import { Input } from 'ui/Input/Input';
import { PasswordInput } from 'ui/Input/PasswordInput';
import { Message } from 'ui/Message/Message';
import style from './SigninForm.module.css';

interface SigninFormProps {
  className?: string;
}

export const SigninForm = ({ className }: SigninFormProps) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const mutation = useMutation((params: SigninParams) => axios.post('/signin', params));

  const handleSubmit = React.useCallback<React.FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();
      mutation.mutate({
        email,
        password,
      });
    },
    [email, password]
  );

  return (
    <div className={className}>
      {mutation.isError && (
        <Message className={style.errorMessage} type="error" message={extractMessageFromError(mutation.error)} />
      )}
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

        <div className={style.buttons}>
          <Button type="submit">Sign in</Button>
          <Link className={style.link} to="/recover-password">
            Help! I forgot my password
          </Link>
        </div>
      </form>
    </div>
  );
};
