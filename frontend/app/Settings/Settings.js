export {
    setLocalStorage,
    getLocaleStorage
}

export const fallbackLng = 'en'
export const languages = [fallbackLng, 'ar']
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export function getOptions (lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}

function setLocalStorage(key, value){
    if(key && value){
        localStorage.setItem(key, value)
    }
}

function getLocaleStorage(key){
    if(key){
        const item = localStorage.getItem(key)

        if(item){
            return JSON.parse(item)
        }
        return null
    }
}