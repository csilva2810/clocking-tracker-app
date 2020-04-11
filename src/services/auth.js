import api from './api';

export const login = credentials => api.post('/auth/login', credentials);
export const signup = credentials => api.post('/auth/signup', credentials);
export const fetchAuthenticatedUser = () => api.get('/auth/user');

export const isAuthenticated = () => Boolean(getToken);

export const getToken = () => localStorage.getItem('token');
export const setToken = token => {
  localStorage.setItem('token', token);
};
export const removeToken = () => {
  localStorage.removeItem('token');
};
