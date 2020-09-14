import {
  GET_TRANSACTIONS,
  TRANSACTOIN_DETAIL
} from './type';
import api from '../../constants/api';

export const getClientTransactions = () => async (dispatch) => {
  const response = await api.get('/api/v1/client-transactions');
  try {
    dispatch({
      type: GET_TRANSACTIONS,
      payload: response.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getClientTransactionDetail = (invoice_no) => async (dispatch) => {
  const response = await api.get(`/api/v1/client-transactions/${invoice_no}`);
  try {
    dispatch({
      type: TRANSACTOIN_DETAIL,
      payload: response.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};
