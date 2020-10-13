import {
  GET_CLIENT_TRANSACTIONS,
  GET_CLIENT_TRANSACTIONS_DETAIL,
  GET_CLIENT_TRANSACTIONS_PAGINATION
} from '../types'

const initialState = {
  list: [],
  detail: {},
  links: {},
  meta: {}
}

export const clientTransactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENT_TRANSACTIONS:
      return {
        ...state,
        list: action.payload.data,
        links: action.payload.links,
        meta: action.payload.meta
      };
    case GET_CLIENT_TRANSACTIONS_PAGINATION:
      return {
        ...state,
        list: action.payload.data,
        links: action.payload.links,
        meta: action.payload.meta
      };
    case GET_CLIENT_TRANSACTIONS_DETAIL:
      return { ...state, detail: action.payload }
    default:
      return { ...state }
  }
}
