import React from 'react';
import { Text } from '@eo-locale/react';

import { RecoverPasswordForm } from './RecoverPasswordForm/RecoverPasswordForm';

export const RecoverPasswordPage = () => {
  return (
    <>
      <h1>
        <Text id="pages.recoverPassword.title" />
      </h1>

      <RecoverPasswordForm />
    </>
  );
};
