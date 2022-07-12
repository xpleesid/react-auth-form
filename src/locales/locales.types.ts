export type Language = 'en' | 'ru';

export interface LocaleMessages {
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
