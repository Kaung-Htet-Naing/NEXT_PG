import {
  POST_CLIENT_LOGIN,
  POST_CLIENT_LOGIN_ERROR,
  CLEAR_STATUS
} from '../types';

const initialState = {
  login:{success:false}
}

export const AuthenticationReducer = (state=initialState,action)=>{
  switch(action.type){
    case POST_CLIENT_LOGIN:
      return {...state,login:action.payload};
    case CLEAR_STATUS :
      return {...state,login:{success:false}};
    default :
      return {...state}
  }
}