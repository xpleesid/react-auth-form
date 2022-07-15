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
      description:
        'Эта страница доступна только вошедшим в систему пользователям. Впрочем, тут особо ничего и нет. Помимо этой кнопки выхода.',
      logoutText: 'Выйти',
      email: 'Ваша почта',
    },
    recoverPassword: {
      title: 'Забыли пароль? Ничего страшного!',
    },
    notFound: {
      title: 'Как ты сюда попал?',
    },
  },
  forms: {
    signin: {
      tabHeader: 'Войти',
      emailLabel: 'Почта',
      emailHint: 'Введите емейл в стандартном формате',
      passwordLabel: 'Пароль',
      passwordHint: 'От 3 до 20 символов. Разрешены латинские буквы в верхнем и нижнем регистре, цифры',
      submitText: 'Войти',
      forgotPasswordText: 'Помогите! Я забыл свой пароль',
    },
    signup: {
      tabHeader: 'Регистрация',
      emailLabel: 'Почта',
      emailHint: 'Введите емейл в стандартном формате',
      passwordLabel: 'Пароль',
      passwordHint: 'От 3 до 20 символов. Разрешены латинские буквы в верхнем и нижнем регистре, цифры',
      repeatPasswordLabel: 'Повторите пароль',
      repeatPasswordHint: 'Пароли должны совпадать',
      submitText: 'Зарегистрироваться',
    },
    recoverPassword: {
      returnToMainPage: 'Вернуться на главную страницу',
      header: 'Мы отправим вам на почту ссылку для восстановления пароля',
      emailLabel: 'Почта',
      emailHint: 'Введите емейл в стандартном формате',
      submitText: 'Получить ссылку',
    },
  },
  errors: {
    unknownError: 'Неизвестаня ошибка',
    unexpectedError: 'Неожиданная ошибка сервера',
    invalidCredentials: 'Неверная почта или пароль',
    userAlreadyExists: 'Пользователь с такой почтой уже зарегистрирован',
  },
};
