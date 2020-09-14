import {
  APP_CREATE,
  APP_LIST,
  GET_APP_CATEGORIES,
  GET_PAYMENT_TYPES,
  DATA_UPDATE,
  APP_DETAIL,
  APP_UPDATE,
  DELETE_DATA,
  SELECT_EDIT,
} from './type';
import api from '../../constants/api';

export const appCreate = (data) => async (dispatch) => {
  const response = await api.post('/api/v1/app-create', data);
  try {
    dispatch({
      type: APP_CREATE,
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }
};

export const appList = () => async (dispatch) => {
  const response = await api.get('/api/v1/app-listing');
  try {
    dispatch({
      type: APP_LIST,
      payload: response.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAppCategories = () => async (dispatch) => {
  const response = await api.get('/api/v1/app-categories');
  try {
    dispatch({
      type: GET_APP_CATEGORIES,
      payload: response.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPaymentTypes = () => async (dispatch) => {
  const response = await api.get('/api/v1/payment-types');
  try {
    dispatch({
      type: GET_PAYMENT_TYPES,
      payload: response.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const dataUpdate = (app_id, data) => async (dispatch) => {
  const response = await api.post(`/api/v1/apps/${app_id}`, data);
  try {
    dispatch({
      type: DATA_UPDATE,
      payload: response.data,
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
      type: APP_DETAIL,
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateData = (app_id, data) => async (dispatch) => {
  const response = await api.post(`/api/v1/apps/${app_id}/update`, data);
  try {
    dispatch({
      type: APP_UPDATE,
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = (app_id) => async (dispatch) => {
  const response = await api.delete(`/api/v1/apps/${app_id}/`);
  try {
    dispatch({
      type: DELETE_DATA,
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
