import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  HIDE_MESSAGE,
  SHOW_MESSAGE,
  TOGGLE_APP_DRAWER,
} from '@crema/constants/ActionTypes';

export const fetchStart = () => {
  return (dispatch) => dispatch({type: FETCH_START});
};

export const fetchSuccess = () => {
  return (dispatch) => dispatch({type: FETCH_SUCCESS});
};

export const fetchError = (error) => {
  return (dispatch) => dispatch({type: FETCH_ERROR, payload: error});
};

export const showMessage = (message) => {
  return (dispatch) => dispatch({type: SHOW_MESSAGE, payload: message});
};
export const onToggleAppDrawer = () => {
  return (dispatch) => dispatch({type: TOGGLE_APP_DRAWER});
};

export const hideMessage = () => {
  return (dispatch) => dispatch({type: HIDE_MESSAGE});
};
