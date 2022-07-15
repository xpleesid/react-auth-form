import React from 'react';
import { Text, useTranslator } from '@eo-locale/react';
import { Button } from 'ui/Button/Button';
import { Input } from 'ui/Input/Input';
import { Link } from 'react-router-dom';
import style from './RecoverPasswordForm.module.css';

export const RecoverPasswordForm = () => {
  const translator = useTranslator();

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
        ← <Text id="forms.recoverPassword.returnToMainPage" />
      </Link>
      <h2 className={style.header}>
        <Text id="forms.recoverPassword.header" />
      </h2>
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
    </div>
  );
};
