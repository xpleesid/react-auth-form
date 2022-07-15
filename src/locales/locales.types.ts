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
    };
    notFound: {
      title: string;
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
