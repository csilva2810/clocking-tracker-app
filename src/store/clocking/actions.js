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

export const editClockingRequest = (id, clocking) => ({
  type: ActionTypes.EDIT_REQUEST,
  id,
  clocking,
});

export const editClockingSuccess = (id, clocking) => ({
  type: ActionTypes.EDIT_SUCCESS,
  id,
  clocking,
});

export const editClockingError = () => ({
  type: ActionTypes.EDIT_ERROR,
});

export const resetStatus = () => ({
  type: ActionTypes.RESET_STATUS,
});
