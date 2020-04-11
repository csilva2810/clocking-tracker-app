import api from './api';

export const update = user => api.patch('/users', user);
