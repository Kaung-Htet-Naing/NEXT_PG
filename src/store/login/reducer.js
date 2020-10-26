import { POST_CLIENT_LOGIN,POST_CLIENT_LOGIN_ERROR } from '../types';

const initialState = {
  login:{},
  error : null
}

export const AuthenticationReducer = (state=initialState,action)=>{
  switch(action.type){
    case POST_CLIENT_LOGIN:
      return {...state,login:action.payload};
    case POST_CLIENT_LOGIN_ERROR:
      return {...state,error : action.payload}
    default :
      return {...state}
  }
}