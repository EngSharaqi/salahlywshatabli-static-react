import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import en from './locale/en';
import ar from './locale/ar';

export default i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar }
    },
    lng: 'en',
    fallbacklng: 'en',
    interpolation: { excapeValue: false },
});