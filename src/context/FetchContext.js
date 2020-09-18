import React, { createContext, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import { withRouter, useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import {
 POST_APP_CREATE_URL,
 POST_APP_CREATE,
 POST_APP_CREATE_ERROR,
 GET_APP_CATEGORIES_URL,
 GET_APP_CATEGORIES,
 GET_APP_CATEGORIES_ERROR,
 GET_APP_PAYMENTS_URL,
 GET_APP_PAYMENTS,
 GET_APP_PAYMENTS_ERROR,
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
   if (code === 401 || code === 403) {
    authContext.logout();
    enqueueSnackbar('This is a success message!', { variant: 'success' });
   }
   return Promise.reject(error);
  }
 )

 const appCreate = (data) => [
  api.post(POST_APP_CREATE_URL, data),
  POST_APP_CREATE,
  POST_APP_CREATE_ERROR
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

 const cleanEthic = () => [
  'CLEAN',
  CLEAN_ETHIC,
  'CLEAN'

 ]

 return (
  <Provider value={{
   appCreate,
   getappCategories,
   getappPayments,
   cleanEthic
  }}>
   {children}
  </Provider>
 )
}

const routWithFetchProvider = withRouter(FetchProvider);

export { FetchContext, routWithFetchProvider };
