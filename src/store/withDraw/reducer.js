import {
  GET_WITH_DRAW_LIST,
  GET_WITH_DRAW_LIST_PAGINATION,
  GET_WITH_DRAW_DETAIL,
  GET_WITH_DRAW_TRANSACTIONS_LIST,
  POST_WITH_DRAW_CLOSE
} from '../types'

const initialState = {
  list: [],
  detail: {data:{payment_slip:''}},
  links: {},
  meta: {},
  WTlist:[],
  close:{},
  status:0
}

export const withDrawReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WITH_DRAW_LIST:
      return {
        ...state,
        list: action.payload.data,
        links: action.payload.links,
        meta: action.payload.meta
      };
    case GET_WITH_DRAW_LIST_PAGINATION:
      return {
        ...state,
        list: action.payload.data,
        links: action.payload.links,
        meta: action.payload.meta
      };
    case GET_WITH_DRAW_DETAIL:
      return { ...state, detail: action.payload,status:action.payload.data.status };
    case GET_WITH_DRAW_TRANSACTIONS_LIST:
      return { ...state, WTlist: action.payload.data };
    case POST_WITH_DRAW_CLOSE:
      return { ...state, close: action.payload };
    default:
      return { ...state };
  }
}