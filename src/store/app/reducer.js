import {
  APP_CREATE,
  APP_LIST,
  GET_APP_CATEGORIES,
  GET_PAYMENT_TYPES,
  APP_DETAIL,
  APP_UPDATE,
  DELETE_DATA,
  SELECT_EDIT
} from './type';

const INITIAL_STATE = {
  detail: {
  },
  status: null,
  data: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APP_LIST:
      return { ...state, data: action.payload }
    case APP_CREATE:
      return { ...state };
    case APP_DETAIL:
      return { ...state, detail: action.payload.data.data, status: action.payload.status };
    case APP_UPDATE:
      return { ...state, updateData: action.payload };
    case DELETE_DATA:
      return { ...state, res: action.payload }
    default:
      return state
  }
}

export const categoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_APP_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}

export const paymentTypesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PAYMENT_TYPES:
      return { ...state, payment_types: action.payload };
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
