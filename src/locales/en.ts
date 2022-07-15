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
      title: 'Here is some content for you',
    },
    notFound: {
      title: 'How did you get here?',
    },
  },
  errors: {
    unknownError: 'Unknown error',
    unexpectedError: 'Unexpected server error',
    invalidCredentials: 'Invalid credentials',
    userAlreadyExists: 'User with this email already exists',
  },
};
