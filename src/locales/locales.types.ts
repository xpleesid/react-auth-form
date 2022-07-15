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
      title: string;
      description: string;
      logoutText: string;
    };
    recoverPassword: {
      title: string;
    };
    notFound: {
      title: string;
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
    };
  };
  errors: {
    unknownError: string;
    unexpectedError: string;
    invalidCredentials: string;
    userAlreadyExists: string;
  };
}

export interface Locale {
  language: Language;
  messages: LocaleMessages;
}
