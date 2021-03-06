import { Literal, Static, Union } from 'runtypes';

export const LanguageSchema = Union(Literal('en'), Literal('ru'));
export type Language = Static<typeof LanguageSchema>;

export interface LocaleMessages {
  language: {
    legendText: string;
    ru: string;
    en: string;
  };
  pages: {
    auth: {
      title: string;
    };
    content: {
      description: string;
      logoutText: string;
      email: string;
    };
    recoverPassword: {
      title: string;
    };
    notFound: {
      title: string;
      description1: string;
      description2: string;
      returnToMainPage: string;
    };
  };
  forms: {
    signin: {
      tabHeader: string;
      emailLabel: string;
      emailHint: string;
      passwordLabel: string;
      passwordHint: string;
      submitText: string;
      forgotPasswordText: string;
    };
    signup: {
      tabHeader: string;
      emailLabel: string;
      emailHint: string;
      passwordLabel: string;
      passwordHint: string;
      repeatPasswordLabel: string;
      repeatPasswordHint: string;
      submitText: string;
    };
    recoverPassword: {
      returnToMainPage: string;
      header: string;
      emailLabel: string;
      emailHint: string;
      submitText: string;
      successMessage: string;
    };
  };
  errors: {
    unknownError: string;
    unexpectedError: string;
    invalidCredentials: string;
    userAlreadyExists: string;
  };
  password: {
    eyeIconLabel: string;
  };
}

export interface Locale {
  language: Language;
  messages: LocaleMessages;
}
