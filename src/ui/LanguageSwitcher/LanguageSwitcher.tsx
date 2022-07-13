import classnames from 'classnames';
import React from 'react';
import { EnFlagIcon } from 'ui/Icon/EnFlag';
import { RuFlagIcon } from 'ui/Icon/RuFlag';
import { LocaleContext } from 'locales';
import { Language } from 'locales/locales.types';
import style from './LanguageSwitcher.module.css';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = React.useContext(LocaleContext);
  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(event.target.value as Language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <fieldset>
      <legend className={style.legend}>Language:</legend>
      <label htmlFor="ru" className={classnames(style.label, language === 'ru' && style.activeLabel)}>
        <RuFlagIcon />
        <input className={style.radio} type="radio" name="language" id="ru" value="ru" onChange={handleChange} />
      </label>

      <label htmlFor="en" className={classnames(style.label, language === 'en' && style.activeLabel)}>
        <EnFlagIcon />
        <input className={style.radio} type="radio" name="language" id="en" value="en" onChange={handleChange} />
      </label>
    </fieldset>
  );
};
