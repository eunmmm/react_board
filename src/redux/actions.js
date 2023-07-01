import { ADD_INFO, REMOVE_INFO, EDIT_INFO } from './constants';

export const addInfo = (info) => ({
  type: ADD_INFO,
  payload: info,
});

export const removeInfo = (id) => ({
  type: REMOVE_INFO,
  payload: id,
});

export const editInfo = (info) => ({
  type: EDIT_INFO,
  payload: info,
});