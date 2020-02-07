import api from './api';

export const login = credentials => api.post('/auth/login', credentials);

export const getToken = () => localStorage.getItem('token');

export const isAuthenticated = () => Boolean(getToken);

export const authenticate = token => {
  localStorage.setItem('token', token);
};
