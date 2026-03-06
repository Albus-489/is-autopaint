import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import fi from './locales/fi.json';
import en from './locales/en.json';
import no from './locales/no.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fi: { translation: fi },
      en: { translation: en },
      no: { translation: no },
    },
    fallbackLng: 'fi',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
