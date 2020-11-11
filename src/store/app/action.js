import {
  SELECT_EDIT,
  STORE_PASSWORD,
  GET_APP_DETAIL
} from '../types';
import api from '../../constants/api';

export const storePassword = (password) => (dispatch) => {
  try {
    dispatch({
      type: STORE_PASSWORD,
      payload: password,
    });
  } catch (error) {
    console.log(error);
  }
};

export const dataDetail = (app_id, password) => async (dispatch) => {
  const response = await api.post(`/api/v1/apps/${app_id}/detail`, {
    'password': password
  });
  try {
    dispatch({
      type: GET_APP_DETAIL,
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }
};

export const selectdata = (data) => (dispatch) => {
  try {
    dispatch({
      type: SELECT_EDIT,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
