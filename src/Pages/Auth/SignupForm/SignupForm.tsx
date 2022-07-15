import { Text, useTranslator } from '@eo-locale/react';
import React from 'react';
import { Button } from 'ui/Button/Button';
import { Input } from 'ui/Input/Input';
import { PasswordInput } from 'ui/Input/PasswordInput';

interface SignupFormProps {
  className?: string;
}

export const SignupForm = ({ className }: SignupFormProps) => {
  const translator = useTranslator();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordRepeat, setPasswordRepeat] = React.useState('');

  const [arePasswordsEqual, setPasswordsEqual] = React.useState(true);

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
    },
    [email, password, passwordRepeat]
  );

  return (
    <div className={className}>
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
