import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEnglish from "../locales/en/translation.json";
import translationRussian from "../locales/ru/translation.json";


const resources = {
  en: {
      translation: translationEnglish,
  },
  ru: {
      translation: translationRussian,
  }
}
 

i18next
.use(initReactI18next)
.init({
  resources,
  lng:"en"
});

export default i18next;
