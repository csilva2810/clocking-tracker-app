import api from './api';

export const fetch = clocking => api.get('/clockings');
export const create = clocking => api.post('/clockings', clocking);
