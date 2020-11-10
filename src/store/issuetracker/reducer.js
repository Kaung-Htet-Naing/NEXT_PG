import {
  GET_ISSUES_LIST,
  GET_ISSUE_DETAIL,
  GET_COMMENTS_LIST,
  POST_COMMENT_CREATE,
  POST_COMMENT_EDIT,
  DELETE_COMMENT,
  CLEAN_ETHIC
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
        status:'CREATE'
      };
    case POST_COMMENT_EDIT :
      return{
        ...state,
        status:'EDIT'
      };
    case DELETE_COMMENT :
      return{
        ...state,
        status:'DELETE'
      };
    case CLEAN_ETHIC:
      return { ...state, status: null }
    default :return{...state}
  }
}