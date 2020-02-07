import { ADD_DAY, EDIT_DAY } from './types';

export const addDay = day => ({
  type: ADD_DAY,
  day,
});

export const editDay = day => ({
  type: EDIT_DAY,
  day,
});
