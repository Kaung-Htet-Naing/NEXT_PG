import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AUTH_TOKEN = 'apiToken';

const AuthProvider = ({ children }) => {

  const history = useHistory();
  const token = localStorage.getItem(AUTH_TOKEN);

  const [authState, setAuthState] = useState({
    token
  })

  const setAuthInfo = (token ) => {
    localStorage.setItem(AUTH_TOKEN, token);

    setAuthState({
      token
    });
  }

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    setAuthState({});
    history.push('/auth/login');

  }

  const isAuthenticated = () => {
    if (!authState.token) {
      return false;
    }
    return true;
  };

  return (
    <Provider
      value={{
        authState,
        setAuthState: authInfo => setAuthInfo(authInfo),
        logout,
        isAuthenticated
      }}
    >
      {children}
    </Provider>
  )

}

export { AuthContext, AuthProvider };