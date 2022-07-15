import { Text, useTranslator } from '@eo-locale/react';
import axios from 'axios';
import React from 'react';
import { useMutation } from 'react-query';
import { SignupParams } from 'services/ApiService/ApiService.types';
import { loginUser } from 'services/AuthService/AuthService';
import { extractMessageFromError } from 'services/ErrorService/ErrorService';
import { Button } from 'ui/Button/Button';
import { Input } from 'ui/Input/Input';
import { PasswordInput } from 'ui/Input/PasswordInput';
import { Message } from 'ui/Message/Message';
import style from './SignupForm.module.css';

interface SignupFormProps {
  className?: string;
}

export const SignupForm = ({ className }: SignupFormProps) => {
  const translator = useTranslator();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordRepeat, setPasswordRepeat] = React.useState('');
  const [showPasswordError, setShowpasswordError] = React.useState(false);

  const [arePasswordsEqual, setPasswordsEqual] = React.useState(true);

  const mutation = useMutation((params: SignupParams) => axios.post('/signup', params));

  React.useEffect(() => {
    if (password !== passwordRepeat) {
      setPasswordsEqual(false);
    } else {
      setPasswordsEqual(true);
    }
  }, [password, passwordRepeat]);

  const handleSubmit = React.useCallback<React.FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();

      if (password !== passwordRepeat) {
        setShowpasswordError(true);
      } else {
        setShowpasswordError(false);

        mutation.mutate({
          email,
          password,
        });
      }
    },
    [email, password, passwordRepeat]
  );

  React.useEffect(() => {
    if (mutation.isSuccess) {
      loginUser(email, 'SOME_RANDOM_SESSION');
    }
  }, [mutation.isSuccess]);

  return (
    <div className={className}>
      {(showPasswordError || mutation.isError) && (
        <Message
          className={style.errorMessage}
          type="error"
          message={
            showPasswordError
              ? translator.translate('forms.signup.repeatPasswordHint')
              : extractMessageFromError(mutation.error)
          }
        />
      )}
      <form action="" onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={(value) => setEmail(value)}
          label={translator.translate('forms.signup.emailLabel')}
          placeholder="example@mail.com"
          hint={translator.translate('forms.signup.emailHint')}
          required
        />

        <PasswordInput
          name="password"
          value={password}
          onChange={(value) => setPassword(value)}
          label={translator.translate('forms.signup.passwordLabel')}
          hint={translator.translate('forms.signup.passwordHint')}
          minLength={3}
          maxLength={20}
          pattern="[a-zA-Z0-9]{3,20}"
          required
        />

        <PasswordInput
          name="password-repeat"
          value={passwordRepeat}
          onChange={(value) => setPasswordRepeat(value)}
          label={translator.translate('forms.signup.repeatPasswordLabel')}
          minLength={3}
          maxLength={20}
          pattern="[a-zA-Z0-9]{3,20}"
          hint={arePasswordsEqual ? undefined : translator.translate('forms.signup.repeatPasswordHint')}
          isErrorHint={!arePasswordsEqual}
          required
        />

        <Button type="submit">
          <Text id="forms.signup.submitText" />
        </Button>
      </form>
    </div>
  );
};
