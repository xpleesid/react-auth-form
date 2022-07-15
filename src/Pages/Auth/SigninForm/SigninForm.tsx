import { Text, useTranslator } from '@eo-locale/react';
import axios from 'axios';
import React from 'react';
import { useMutation } from 'react-query';
import { Link, Navigate } from 'react-router-dom';
import { SigninParams } from 'services/ApiService/ApiService.types';
import { loginUser } from 'services/AuthService/AuthService';
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
  const translator = useTranslator();

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

  React.useEffect(() => {
    if (mutation.isSuccess) {
      loginUser(email, 'SOME_SESSION_ID');
    }
  }, [mutation.isSuccess]);

  if (mutation.isSuccess) {
    return <Navigate to="/" />;
  }
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
          label={translator.translate('forms.signin.emailLabel')}
          placeholder="example@mail.com"
          hint={translator.translate('forms.signin.emailHint')}
          required
        />

        <PasswordInput
          name="password"
          value={password}
          onChange={(value) => setPassword(value)}
          label={translator.translate('forms.signin.passwordLabel')}
          hint={translator.translate('forms.signin.passwordHint')}
          minLength={3}
          maxLength={20}
          pattern="[a-zA-Z0-9]{3,20}"
          required
        />

        <div className={style.buttons}>
          <Button type="submit">
            <Text id="forms.signin.submitText" />
          </Button>
          <Link className={style.link} to="/recover-password">
            <Text id="forms.signin.forgotPasswordText" />
          </Link>
        </div>
      </form>
    </div>
  );
};
