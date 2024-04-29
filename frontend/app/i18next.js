"use client";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import resources from 'i18next-resources-to-backend'
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resources((language, namespace) => import(`./i18n/locales/${language}/${namespace}`)))
  .init({
    lng: 'en', // let detect the language on client side
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    initImmediate: false,
  });

function getLanguage() {
  return new Promise((resolved) => {
    const currentLang = window.localStorage.getItem("lang");
    return currentLang ? resolved(currentLang) : resolved("en");
  });
}

getLanguage().then((language) => {
  if (language && language !== i18next.resolvedLanguage) {
    i18next.changeLanguage(language);
  }
});
