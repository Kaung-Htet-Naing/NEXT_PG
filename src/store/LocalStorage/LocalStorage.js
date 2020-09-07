export const setToken = (token) => localStorage.setItem('apiToken', token);

export const getToken = () => localStorage.getItem('apiToken');

export const clearoken = () => localStorage.removeItem('apiToken');
