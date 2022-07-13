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
}

export interface Locale {
  language: Language;
  messages: LocaleMessages;
}
