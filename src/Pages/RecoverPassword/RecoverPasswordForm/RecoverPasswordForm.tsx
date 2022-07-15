import React from 'react';
import { Text, useTranslator } from '@eo-locale/react';
import { Button } from 'ui/Button/Button';
import { Input } from 'ui/Input/Input';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import axios from 'axios';
import { RecoverPasswordParams } from 'services/ApiService/ApiService.types';
import { Message } from 'ui/Message/Message';
import { extractMessageFromError } from 'services/ErrorService/ErrorService';
import style from './RecoverPasswordForm.module.css';

export const RecoverPasswordForm = () => {
  const translator = useTranslator();

  const [email, setEmail] = React.useState('');

  const mutation = useMutation((params: RecoverPasswordParams) => axios.put('/password/recover', params));

  const handleSubmit = React.useCallback<React.FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();

      mutation.mutate({ email });
    },
    [email]
  );

  return (
    <div className={style.wrapper}>
      <Link className={style.link} to="/">
        ← <Text id="forms.recoverPassword.returnToMainPage" />
      </Link>
      {mutation.isSuccess ? (
        <Message type="success" message={translator.translate('forms.recoverPassword.successMessage')} />
      ) : (
        <>
          <h2 className={style.header}>
            <Text id="forms.recoverPassword.header" />
          </h2>

          {mutation.isError && (
            <Message className={style.errorMessage} type="error" message={extractMessageFromError(mutation.error)} />
          )}

          <form action="" onSubmit={handleSubmit}>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(value) => setEmail(value)}
              label={translator.translate('forms.recoverPassword.emailLabel')}
              placeholder="example@mail.com"
              hint={translator.translate('forms.recoverPassword.emailHint')}
              required
            />
            <Button type="submit">
              <Text id="forms.recoverPassword.submitText" />
            </Button>
          </form>
        </>
      )}
    </div>
  );
};
