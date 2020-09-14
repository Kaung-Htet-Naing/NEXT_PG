import {
  GET_TRANSACTIONS,
  TRANSACTOIN_DETAIL
} from './type';

export const clientTransactionsReducer = (state = { transactionlist: [] }, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return { ...state, transactionlist: action.payload };
    case TRANSACTOIN_DETAIL:
      return { ...state, transactiondetail: action.payload }
    default:
      return { ...state }
  }
}
