import {
  APP_CREATE,
  APP_LIST,
  GET_APP_CATEGORIES,
  GET_PAYMENT_TYPES,
  APP_DETAIL,
  APP_UPDATE,
  DELETE_DATA
} from './type';

const INITIAL_STATE = {
  detail: {
  },
  status: null
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
