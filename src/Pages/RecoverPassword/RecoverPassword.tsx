import React from 'react';
import { Link } from 'react-router-dom';
import style from './RecoverPassword.module.css';
import { RecoverPasswordForm } from './RecoverPasswordForm/RecoverPasswordForm';

export const RecoverPasswordPage = () => {
  return (
    <>
      <h1>Forgot password? No problem!</h1>

      <RecoverPasswordForm />
    </>
  );
};
