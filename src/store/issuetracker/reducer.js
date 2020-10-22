import {
  GET_ISSUES_LIST,
  POST_ISSUES_CREATE
} from '../types';

const initialState = {
  list:[],
  status:null
}

export const issueTrackerReducer = (state = initialState,action)=>{
  switch(action.type){
    case GET_ISSUES_LIST :
      return{
        ...state,
        list:action.payload.data
      };
    case POST_ISSUES_CREATE :
      return{
        ...state,
        status:action.payload
      };
    default :return{...state}
  }
}