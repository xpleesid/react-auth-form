import { DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY } from 'constants/locales';
import { Language } from 'locales/locales.types';
import { getSavedOrDefaultLanguage, saveSelectedLocale } from './LocaleService';

describe('LocaleService', () => {
  const FAKE_LANGUAGE: Language = 'ru';

  describe('saveSelectedLocale', () => {
    it('should save provided data to localStorage', () => {
      const spy = jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem').mockImplementation();

      saveSelectedLocale(FAKE_LANGUAGE);

      expect(spy).toHaveBeenCalledWith(LANGUAGE_STORAGE_KEY, FAKE_LANGUAGE);
    });
  });

  describe('getSavedOrDefaultLanguage', () => {
    it('should return saved locale if it is correct', () => {
      jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem').mockReturnValue(FAKE_LANGUAGE);

      const locale = getSavedOrDefaultLanguage();

      expect(locale).toEqual(FAKE_LANGUAGE);
    });

    it('should return default locale if saved one is incorrect', () => {
      jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem').mockReturnValue('SOME_RANDOM_WORDS');

      const locale = getSavedOrDefaultLanguage();

      expect(locale).toEqual(DEFAULT_LANGUAGE);
    });
  });
});
