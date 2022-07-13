import classnames from 'classnames';
import React from 'react';
import { EnFlagIcon } from 'ui/Icon/EnFlag';
import { RuFlagIcon } from 'ui/Icon/RuFlag';
import { LocaleContext } from 'locales';
import { LanguageSchema } from 'locales/locales.types';
import { Text } from '@eo-locale/react';
import { getSavedOrDefaultLanguage } from 'services/LocaleService/LocaleService';
import style from './LanguageSwitcher.module.css';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = React.useContext(LocaleContext);

  React.useEffect(() => {
    const savedLanguage = getSavedOrDefaultLanguage();
    if (savedLanguage !== language) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const lang = event.target.value;
    if (LanguageSchema.guard(lang)) {
      setLanguage(lang);
    }
  }, []);

  return (
    <fieldset>
      <legend className={style.legend}>
        <Text id="language.legendText" />
      </legend>

      <label htmlFor="ru" className={classnames(style.label, language === 'ru' && style.activeLabel)}>
        <span className={style.languageName}>
          <Text id="language.ru" />
        </span>

        <RuFlagIcon />

        <input className={style.radio} type="radio" name="language" id="ru" value="ru" onChange={handleChange} />
      </label>

      <label htmlFor="en" className={classnames(style.label, language === 'en' && style.activeLabel)}>
        <span className={style.languageName}>
          <Text id="language.en" />
        </span>

        <EnFlagIcon />

        <input className={style.radio} type="radio" name="language" id="en" value="en" onChange={handleChange} />
      </label>
    </fieldset>
  );
};
