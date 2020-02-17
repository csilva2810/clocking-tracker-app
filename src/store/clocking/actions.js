import * as ActionTypes from './types';

export const fetchClockingRequest = () => ({
  type: ActionTypes.FETCH_REQUEST,
});

export const fetchClockingSuccess = clocking => ({
  type: ActionTypes.FETCH_SUCCESS,
  clocking,
});

export const fetchClockingError = () => ({
  type: ActionTypes.FETCH_ERROR,
});

export const createClockingRequest = clocking => ({
  type: ActionTypes.CREATE_REQUEST,
  clocking,
});

export const createClockingSuccess = clocking => ({
  type: ActionTypes.CREATE_SUCCESS,
  clocking,
});

export const createClockingError = () => ({
  type: ActionTypes.CREATE_ERROR,
});

export const createClockingReset = () => ({
  type: ActionTypes.CREATE_RESET,
});

export const editDay = day => ({
  type: ActionTypes.EDIT_CLOCKING,
  day,
});
