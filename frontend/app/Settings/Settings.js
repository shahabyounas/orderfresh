export {
    setLocalStorage,
    getLocaleStorage
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