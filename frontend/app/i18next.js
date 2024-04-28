"use client";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    Backend((lang, namespace) =>
      import(`../app/i18n/locales/${lang}/${namespace}.json`)
    )
  )
  .init({
    lng: "en",
    fallbackLng: "en",
  });

function getLanguage() {
  return new Promise((resolved) => {
    const currentLang = window.localStorage.getItem("lang");

    return currentLang ? resolved(JSON.parse(currentLang)) : resolved("en");
  });
}

getLanguage().then((language) => {
  if (language && language !== i18next.resolvedLanguage) {
    i18next.changeLanguage(language);
  }
});
