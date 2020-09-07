import { SESSION_LOGIN, SESSION_LOGOUT } from './type';

export const login = () => dispatch =>
  dispatch({
    type: SESSION_LOGIN
  });

export const logout = () => dispatch =>
  dispatch({
    type: SESSION_LOGOUT
  });
