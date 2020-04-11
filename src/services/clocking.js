import moment from 'moment';

import api from './api';

import { msToTime, dateFormat } from '../utils/time';

export const format = clocking => ({
  id: clocking._id,
  date: moment(clocking.date).format(dateFormat),
  in: msToTime(clocking.in),
  lunchStart: msToTime(clocking.lunchStart),
  lunchEnd: msToTime(clocking.lunchEnd),
  out: msToTime(clocking.out),
  workedHours: msToTime(clocking.workedHours),
  balance: msToTime(clocking.balance),
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
