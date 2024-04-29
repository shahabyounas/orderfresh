'use client'
import {  useTranslation } from 'next-i18next'
import { APP_SUPPORTED_LANGUAGES } from '../constants';

function useLanguage(){
    const { i18n, t: translation }  = useTranslation()
    const languages = APP_SUPPORTED_LANGUAGES;
    
    function t(string){
        return translation(string)
    }

    function changeLanguage(language){
        i18n.changeLanguage(language).then(() => {
            localStorage.setItem('lang', language)
        })
    }

    return {
        languages,
        language: i18n.language ||  i18n.resolvedLanguage || 'en',
        t,
        changeLanguage,
    }
}

export {
    useLanguage,
}