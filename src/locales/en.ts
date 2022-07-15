import { LocaleMessages } from './locales.types';

export const enMessages: LocaleMessages = {
  language: {
    legendText: 'Language',
    ru: 'Russian',
    en: 'English',
  },
  pages: {
    auth: {
      title: "Hello, we've been waiting for you!",
    },
    content: {
      description:
        "This page can only be seen by authenticated users. But there isn't much here. Except for this logout button.",
      logoutText: 'Log out',
      email: 'Your email',
    },
    recoverPassword: {
      title: 'Forgot password? No problem!',
    },
    notFound: {
      title: 'How did you get here?',
      description1:
        "You totally should not be here. Did you do something wrong? Or is it our fault? Can't tell right away...",
      description2:
        "Okay, let's focus on what we can do right now. See that link down below? Come on, give it a nice solid click. It will take you straight back to the main page.",
      returnToMainPage: 'Return to main page',
    },
  },
  forms: {
    signin: {
      tabHeader: 'Sign in',
      emailLabel: 'Email',
      emailHint: 'Enter email in standard format',
      passwordLabel: 'Password',
      passwordHint: 'From 3 to 20 symbols. Allowed symbols: lowercase and uppercase letters, numbers',
      submitText: 'Sign in',
      forgotPasswordText: 'Help! I forgot my password',
    },
    signup: {
      tabHeader: 'Sign up',
      emailLabel: 'Email',
      emailHint: 'Enter email in standard format',
      passwordLabel: 'Password',
      passwordHint: 'From 3 to 20 symbols. Allowed symbols: lowercase and uppercase letters, numbers',
      repeatPasswordLabel: 'Repeat password',
      repeatPasswordHint: 'Passwords should be equal',
      submitText: 'Sign up',
    },
    recoverPassword: {
      returnToMainPage: 'Return to main page',
      header: "We'll send recovery link to your email",
      emailLabel: 'Email',
      emailHint: 'Enter email in standard format',
      submitText: 'Get link',
      successMessage: 'Great success! Check your latest inbox email and click on received link',
    },
  },
  errors: {
    unknownError: 'Unknown error',
    unexpectedError: 'Unexpected server error',
    invalidCredentials: 'Invalid credentials',
    userAlreadyExists: 'User with this email already exists',
  },
  password: {
    eyeIconLabel: 'Switch password visibility',
  },
};
