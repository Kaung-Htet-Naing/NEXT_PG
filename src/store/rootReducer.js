import { combineReducers } from 'redux';
import registerFormreducer from './Register/register.reducer';
import mainReducer from './main/reducer'
import appReducer from './app/reducer';
import { categoriesReducer } from './app/reducer';
import { paymentTypesReducer } from './app/reducer';
import { selectedDataReducer } from './app/reducer';
import { clientTransactionsReducer } from './transactions/reducer';
import { withDrawReducer } from './withDraw/reducer'
import userReducer from './user/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  main: mainReducer,
  reigsterform: registerFormreducer,
  appdata: appReducer,
  categories: categoriesReducer,
  paymentTypes: paymentTypesReducer,
  selectedApp: selectedDataReducer,
  transactions: clientTransactionsReducer,
  withDraw: withDrawReducer
})

export default rootReducer;
