
export const API_METHODS = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
    PUT: 'PUT'
}

export const ENDPOINTS = {
    login: '/auth/login',
    register: '/auth/signup',
    profile: '/auth/profile',
    upload: '/generate-content'
}


export const getValue = (key) => localStorage.getItem(key);
export const setValue = (key, value) => localStorage.setItem(key, value);
export const removeValue = (key) => localStorage.removeItem(key);


export const STORAGE_KEYS = {
    TOKEN: 'TOKEN'
}