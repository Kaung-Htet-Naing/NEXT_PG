import { combineReducers } from 'redux';
import registerFormreducer from './Register/register.reducer';
import mainReducer from './main/reducer'
import appReducer from './app/reducer';
import { categoriesReducer } from './app/reducer';
import { paymentTypesReducer } from './app/reducer';
import { selectedDataReducer } from './app/reducer';
import { storePasswordReducer } from './app/reducer';
import { clientTransactionsReducer } from './transactions/reducer';
import { withDrawReducer } from './withDraw/reducer'
import { issueTrackerReducer } from './issuetracker/reducer'
import userReducer from './user/reducer';
import { AuthenticationReducer } from './login/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  main: mainReducer,
  reigsterform: registerFormreducer,
  authentication:AuthenticationReducer,
  appdata: appReducer,
  categories: categoriesReducer,
  paymentTypes: paymentTypesReducer,
  selectedApp: selectedDataReducer,
  password:storePasswordReducer,
  transactions: clientTransactionsReducer,
  withDraw: withDrawReducer,
  issues:issueTrackerReducer
})

export default rootReducer;
