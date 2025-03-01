import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import sp from './locales/sp.json';

const resources = { en: { translation: en }, sp: { translation: sp } };

export const languages = {
    english: "en",
    spanish: "sp",
}

// Set the default language (Change 'en' to your preferred default)
const defaultLanguage = languages.english;

i18n.use(initReactI18next).init({
    resources,
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    interpolation: { escapeValue: false },
});

export default i18n;
