import {
  APP_CREATE,
  APP_LIST,
  APP_DETAIL,
  APP_UPDATE,
  DELETE_DATA,
  SELECT_EDIT
} from './type';

import {
  POST_APP_CREATE,
  GET_APP_CATEGORIES,
  GET_APP_PAYMENTS,
  CLEAN_ETHIC,
  DELETE_APP,
  DELETE_APP_ERROR,
} from '../types'

const INITIAL_STATE = {
  detail: {
  },
  status: null,
  data: [],
  categories: [],
  payments: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APP_LIST:
      return { ...state, data: action.payload }
    case POST_APP_CREATE:
      return { ...state, status: 'SUCCESS' };
    case APP_DETAIL:
      return { ...state, detail: action.payload.data.data, status: action.payload.status };
    case APP_UPDATE:
      return { ...state, status: 'SUCCESS' };
    case DELETE_APP:
      return { ...state, status: 'DELETE' }
    case DELETE_APP_ERROR:
      return { ...state }
    case CLEAN_ETHIC:
      return { ...state, status: null }
    default:
      return state
  }
}

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_APP_CATEGORIES:
      return { ...state, categories: [...action.payload.data] };
    default:
      return state;
  }
}

export const paymentTypesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_APP_PAYMENTS:
      return { ...state, payments: [...action.payload.data] };
    default:
      return state;
  }
}

const initialSelect = {
  data: {
    'app_name': '',
    'client_name': '',
    'category': '',
    'payment_type': '',
    'platform': '',
    'frontend_url': '',
    'backend_url': ''
  }
}
export const selectedDataReducer = (state = initialSelect, action) => {
  switch (action.type) {
    case SELECT_EDIT:
      return { data: action.payload };
    default:
      return state;
  }
}