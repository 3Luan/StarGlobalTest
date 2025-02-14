import i18n from "i18next";
import en from "./locales/en";
import vi from "./locales/vi";
import { initReactI18next } from "react-i18next";

const locales = {
  en: { translation: en },
  vi: { translation: vi },
};

export const setLocale = (locale) => {
  i18n.changeLanguage(locale);
};

const initData = () => ({
  compatibilityJSON: "v3",
  fallbackLng: "en",
  debug: false,
  interpolation: {
    escapaValue: false,
  },
  resources: locales,
});

i18n.use(initReactI18next).init(initData());

export default i18n;
