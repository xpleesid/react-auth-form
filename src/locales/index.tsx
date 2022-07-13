import { TranslationsProvider } from '@eo-locale/react';
import React from 'react';
import { enMessages } from './en';
import { Language, Locale } from './locales.types';
import { ruMessages } from './ru';

const defaultLanguage: Language = 'en';

export const locales: Locale[] = [
  {
    language: 'en',
    messages: enMessages,
  },
  {
    language: 'ru',
    messages: ruMessages,
  },
];

interface LocaleState {
  language: Language;
}

const initialLocaleState: LocaleState = {
  language: defaultLanguage,
};

interface Action {
  type: 'SET_LANGUAGE';
  payload: Language;
}

const reducer = (state: LocaleState, action: Action): LocaleState => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.payload,
      };
    default:
      return initialLocaleState;
  }
};

export const LocaleContext = React.createContext({
  language: initialLocaleState.language,
  setLanguage: (_: Language) => {},
});

interface LocaleProviderProps {
  children: React.ReactNode;
}

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialLocaleState);

  const value = React.useMemo(
    () => ({
      language: state.language,
      setLanguage: (language: Language) => {
        dispatch({
          type: 'SET_LANGUAGE',
          payload: language,
        });
      },
    }),
    [state]
  );

  return (
    <LocaleContext.Provider value={value}>
      <TranslationsProvider language={state.language} locales={locales}>
        {children}
      </TranslationsProvider>
    </LocaleContext.Provider>
  );
};
