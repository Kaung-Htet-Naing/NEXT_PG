import React, { createContext, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import { withRouter, useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import {
  POST_APP_CREATE_URL,
  POST_APP_CREATE,
  POST_APP_CREATE_ERROR,
  GET_APP_LISTING_URL,
  GET_APP_LISTING,
  GET_APP_LISTING_ERROR,
  GET_APP_DETAIL_URL,
  GET_APP_DETAIL,
  GET_APP_DETAIL_ERROR,
  GET_APP_CATEGORIES_URL,
  GET_APP_CATEGORIES,
  GET_APP_CATEGORIES_ERROR,
  GET_APP_PAYMENTS_URL,
  GET_APP_PAYMENTS,
  GET_APP_PAYMENTS_ERROR,
  DELETE_APP_URL,
  DELETE_APP,
  DELETE_APP_ERROR,
  UPDATE_APP,
  UPDATE_APP_URL,
  UPDATE_APP_ERROR,
  GET_CLIENT_TRANSACTIONS_URL,
  GET_CLIENT_TRANSACTIONS,
  GET_CLIENT_TRANSACTIONS_ERROR,
  GET_CLIENT_TRANSACTIONS_PAGINATION_URL,
  GET_CLIENT_TRANSACTIONS_PAGINATION,
  GET_CLIENT_TRANSACTIONS_PAGINATION_ERROR,
  GET_CLIENT_TRANSACTIONS_DETAIL_URL,
  GET_CLIENT_TRANSACTIONS_DETAIL,
  GET_CLIENT_TRANSACTIONS_DETAIL_ERROR,
  GET_WITH_DRAW_LIST_URL,
  GET_WITH_DRAW_LIST,
  GET_WITH_DRAW_LIST_ERROR,
  GET_WITH_DRAW_LIST_PAGINATION_URL,
  GET_WITH_DRAW_LIST_PAGINATION,
  GET_WITH_DRAW_LIST_PAGINATION_ERROR,
  GET_WITH_DRAW_DETAIL_URL,
  GET_WITH_DRAW_DETAIL,
  GET_WITH_DRAW_DETAIL_ERROR,
  GET_WITH_DRAW_TRANSACTIONS_LIST_URL,
  GET_WITH_DRAW_TRANSACTIONS_LIST,
  GET_WITH_DRAW_TRANSACTIONS_LIST_ERROR,
  POST_WITH_DRAW_CLOSE_URL,
  POST_WITH_DRAW_CLOSE,
  POST_WITH_DRAW_CLOSE_ERROR,
  GET_ISSUES_LIST_URL,
  GET_ISSUES_LIST,
  GET_ISSUES_LIST_ERROR,
  GET_ISSUE_DETAIL_URL,
  GET_ISSUE_DETAIL,
  GET_ISSUE_DETAIL_ERROR,
  GET_COMMENTS_LIST_URL,
  GET_COMMENTS_LIST,
  GET_COMMENTS_LIST_ERROR,
  POST_COMMENT_CREATE_URL,
  POST_COMMENT_CREATE,
  POST_COMMENT_CREATE_ERROR,
  POST_COMMENT_EDIT_URL,
  POST_COMMENT_EDIT,
  POST_COMMENT_EDIT_ERROR,
  DELETE_COMMENT_URL,
  DELETE_COMMENT,
  DELETE_COMMENT_ERROR,
  POST_CLIENT_LOGIN_URL,
  POST_CLIENT_LOGIN,
  POST_CLIENT_LOGIN_ERROR,
  CLEAR_STATUS,
  CLEAN_ETHIC
} from '../store/types';

const FetchContext = createContext();
const { Provider } = FetchContext;


const FetchProvider = ({ children }) => {


  const authContext = useContext(AuthContext);
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_SERVER
  });

  api.interceptors.request.use(
    config => {
      config.headers.Authorization = `Bearer ${authContext.authState.token}`;
      config.headers.language = 'English';
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      const code = error && error.response ? error.response.status : 0;
      console.log(error.response)
      if (code === 401 || code === 403) {
        authContext.logout();
        enqueueSnackbar('Token is expired !', { variant: 'success' });
      }
      if (code === 404 ) {
        enqueueSnackbar(`${error.response.data.message}`, { variant: 'error' });
      }
      return Promise.reject(error);
    }
  )

  //Apps
  const appCreate = (data) => [
    api.post(POST_APP_CREATE_URL, data),
    POST_APP_CREATE,
    POST_APP_CREATE_ERROR
  ]

  const appList = () => [
    api.get(GET_APP_LISTING_URL),
    GET_APP_LISTING,
    GET_APP_LISTING_ERROR
  ]

  const appDetail = (app_id,password) => [
    api.post(GET_APP_DETAIL_URL.replace(':app_id',app_id),{'password':password}),
    GET_APP_DETAIL,
    GET_APP_DETAIL_ERROR
  ]

  const deleteData = (appId) => [
    api.delete(DELETE_APP_URL.replace(':id', appId)),
    DELETE_APP,
    DELETE_APP_ERROR
  ]

  const getappCategories = () => [
    api.get(GET_APP_CATEGORIES_URL),
    GET_APP_CATEGORIES,
    GET_APP_CATEGORIES_ERROR
  ]

  const getappPayments = () => [
    api.get(GET_APP_PAYMENTS_URL),
    GET_APP_PAYMENTS,
    GET_APP_PAYMENTS_ERROR
  ]

  const appUpdate = (appId, data) => [
    api.post(UPDATE_APP_URL.replace(':id', appId), data),
    UPDATE_APP,
    UPDATE_APP_ERROR
  ]

  //Client Transactions
  const getClientTransactions = () => [
    api.get(GET_CLIENT_TRANSACTIONS_URL),
    GET_CLIENT_TRANSACTIONS,
    GET_CLIENT_TRANSACTIONS_ERROR
  ]

  const getClientTransactionsPagination = (pageNo) => [
    api.get(GET_CLIENT_TRANSACTIONS_PAGINATION_URL + pageNo),
    GET_CLIENT_TRANSACTIONS_PAGINATION,
    GET_CLIENT_TRANSACTIONS_PAGINATION_ERROR
  ]

  const getClientTransactionsDetail = (invoice_no) => [
    api.get(GET_CLIENT_TRANSACTIONS_DETAIL_URL.replace(':invoice_no', invoice_no)),
    GET_CLIENT_TRANSACTIONS_DETAIL,
    GET_CLIENT_TRANSACTIONS_DETAIL_ERROR
  ]

  //WithDraws
  const getWithDrawList = () => [
    api.get(GET_WITH_DRAW_LIST_URL),
    GET_WITH_DRAW_LIST,
    GET_WITH_DRAW_LIST_ERROR
  ]

  const getWithDrawListPagination = (pageNo) => [
    api.get(GET_WITH_DRAW_LIST_PAGINATION_URL + pageNo),
    GET_WITH_DRAW_LIST_PAGINATION,
    GET_WITH_DRAW_LIST_PAGINATION_ERROR
  ]

  const getWithDrawDetail = (withdrawID) => [
    api.get(GET_WITH_DRAW_DETAIL_URL.replace(':id', withdrawID)),
    GET_WITH_DRAW_DETAIL,
    GET_WITH_DRAW_DETAIL_ERROR
  ]

  const getWithDrawTransactionLIst = (withdrawID) => [
    api.get(GET_WITH_DRAW_TRANSACTIONS_LIST_URL.replace(':id', withdrawID)),
    GET_WITH_DRAW_TRANSACTIONS_LIST,
    GET_WITH_DRAW_TRANSACTIONS_LIST_ERROR
  ]

  const closeWithDraw = (withdrawID) => [
    api.post(POST_WITH_DRAW_CLOSE_URL.replace(':id', withdrawID)),
    POST_WITH_DRAW_CLOSE,
    POST_WITH_DRAW_CLOSE_ERROR
  ]

  //Issue-Tracker
  const getIssuesList = () =>[
    api.get(GET_ISSUES_LIST_URL),
    GET_ISSUES_LIST,
    GET_ISSUES_LIST_ERROR
  ]

  const getIssueDetail = (id) =>[
    api.get(GET_ISSUE_DETAIL_URL.replace(':id', id)),
    GET_ISSUE_DETAIL,
    GET_ISSUE_DETAIL_ERROR
  ]

  const getCommentsList = (id)=>[
    api.get(GET_COMMENTS_LIST_URL.replace(':id', id)),
    GET_COMMENTS_LIST,
    GET_COMMENTS_LIST_ERROR
  ]

  const postCommentCreate = (id,data)=>[
    api.post(POST_COMMENT_CREATE_URL.replace(':id', id),data),
    POST_COMMENT_CREATE,
    POST_COMMENT_CREATE_ERROR
  ]

  const postCommentEdit = (id,data)=>[
    api.post(POST_COMMENT_EDIT_URL.replace(':id', id),data),
    POST_COMMENT_EDIT,
    POST_COMMENT_EDIT_ERROR
  ]

  const deleteComment = (id)=>[
    api.delete(DELETE_COMMENT_URL.replace(':id', id)),
    DELETE_COMMENT,
    DELETE_COMMENT_ERROR
  ]

  //Client-Login
  const  login = (loginData) =>[
    api.post(POST_CLIENT_LOGIN_URL,loginData),
    POST_CLIENT_LOGIN,
    POST_CLIENT_LOGIN_ERROR
  ]

  const cleanEthic = () => [
    CLEAN_ETHIC,
    CLEAN_ETHIC,
    CLEAN_ETHIC
  ]

  //CLEAN_STATUS
  const cleanStatus = () => [
    CLEAR_STATUS,
    CLEAR_STATUS,
    CLEAR_STATUS
  ]

  return (
    <Provider
      value={{
        appCreate,
        appList,
        getappCategories,
        appDetail,
        getappPayments,
        deleteData,
        appUpdate,
        getClientTransactions,
        getClientTransactionsPagination,
        getClientTransactionsDetail,
        getWithDrawList,
        getWithDrawListPagination,
        getWithDrawDetail,
        getWithDrawTransactionLIst,
        closeWithDraw,
        getIssuesList,
        getIssueDetail,
        getCommentsList,
        postCommentCreate,
        postCommentEdit,
        deleteComment,
        login,
        cleanStatus,
        cleanEthic
      }}
    >
      {children}
    </Provider>
  )
}

const routWithFetchProvider = withRouter(FetchProvider);

export { FetchContext, routWithFetchProvider };
