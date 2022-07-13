// Just another Function-based service. For more info on why it is the way it is look into ../AuthService/AuthService.ts

import { DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY } from 'constants/locales';
import { Language, LanguageSchema } from 'locales/locales.types';

export const saveSelectedLocale = (language: Language): void => {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
};

export const getSavedOrDefaultLanguage = (): Language => {
  const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

  return LanguageSchema.guard(savedLanguage) ? savedLanguage : DEFAULT_LANGUAGE;
};
