
'use client'
import i18next from 'next-i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { setLocalStorage, getLocaleStorage } from './Settings'



i18next
.use(initReactI18next)
.use(LanguageDetector)
.use(Backend((lang, namespace) => import(`./locale/${lang}/${namespace}.json`)))
.init({
    lng: 'en',
    fallbackLng: 'en',
})


const currentLang = getLocaleStorage('lang')

if(currentLang && currentLang !== i18next.resolvedLanguage){
    i18next.changeLanguage(currentLang)
}else {
    setLocalStorage('lang', 'en')
    i18next.changeLanguage('en')
}





