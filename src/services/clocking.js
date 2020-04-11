import moment from 'moment';

import api from './api';

import { dateFormat } from '../utils/time';

export const format = ({ _id, date, ...rest }) => ({
  ...rest,
  id: _id,
  date: moment(date).format(dateFormat),
});

export const fetch = clocking =>
  api.get('/clockings').then(response => {
    if (Array.isArray(response.data) && response.data.length) {
      return response.data.map(format);
    }

    return [];
  });

export const create = clocking => api.post('/clockings', clocking);

export const edit = (id, clocking) => api.patch(`/clockings/${id}`, clocking);
