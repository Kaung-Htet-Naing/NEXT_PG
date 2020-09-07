import { combineReducers } from 'redux';
import registerFormreducer from './Register/register.reducer';
import mainReducer from './main/reducer'
import appReducer from './app/reducer';
import { categoriesReducer } from './app/reducer';
import { paymentTypesReducer } from './app/reducer';

import userReducer from './user/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  main: mainReducer,
  reigsterform: registerFormreducer,
  appdata: appReducer,
  categories: categoriesReducer,
  paymentTypes: paymentTypesReducer,
})

export default rootReducer;
