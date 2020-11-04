import {
  GET_ISSUES_LIST,
  POST_ISSUES_CREATE,
  GET_ISSUE_DETAIL,
  GET_COMMENTS_LIST,
  POST_COMMENT_CREATE,
  POST_COMMENT_EDIT,
  DELETE_COMMENT
} from '../types';

const initialState = {
  list:[],
  status:null,
  detail:{},
  commentsList:[]
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
      }
    case GET_ISSUE_DETAIL :
      return{
        ...state,
        detail:action.payload.data
      };
    case GET_COMMENTS_LIST :
      return{
        ...state,
        commentsList:action.payload.data
      };
    case POST_COMMENT_CREATE :
      return{
        ...state,
        status:action.payload
      };
    case POST_COMMENT_EDIT :
      return{
        ...state,
        status:action.payload
      };
    case DELETE_COMMENT :
      return{
        ...state,
        status:action.payload
      };
    default :return{...state}
  }
}