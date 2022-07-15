import { LocaleMessages } from './locales.types';

export const ruMessages: LocaleMessages = {
  language: {
    legendText: 'Язык',
    ru: 'Русский',
    en: 'Английский',
  },
  pages: {
    auth: {
      title: 'Привет, мы тебя ждали!',
    },
    content: {
      title: 'Вот немного контента для тебя',
    },
    notFound: {
      title: 'Как ты сюда попал?',
    },
  },
  errors: {
    unknownError: 'Неизвестаня ошибка',
    unexpectedError: 'Неожиданная ошибка сервера',
    invalidCredentials: 'Неверная почта или пароль',
    userAlreadyExists: 'Пользователь с такой почтой уже зарегистрирован',
  },
};
