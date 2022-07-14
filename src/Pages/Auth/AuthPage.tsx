import { Text } from '@eo-locale/react';
import React from 'react';
import { Tabs } from 'ui/Tabs/Tabs';
import style from './AuthPage.module.css';
import { SigninForm } from './SigninForm/SigninForm';
import { SignupForm } from './SignupForm/SignupForm';

export const AuthPage = () => {
  const [activeTab, setActiveTab] = React.useState('signin');

  return (
    <div className={style.wrapper}>
      <h1>
        <Text id="pages.auth.title" />
        <div className={style.formWrapper}>
          <Tabs
            activeTab={activeTab}
            onChangeTab={(tab) => setActiveTab(tab)}
            tabs={[
              {
                value: 'signin',
                label: 'Sign in',
                content: <SigninForm />,
              },
              {
                value: 'signup',
                label: 'Sign up',
                content: <SignupForm />,
              },
            ]}
          />
        </div>
        <SigninForm className={style.authForm} />
      </h1>
    </div>
  );
};
