import React from 'react';
import MomentUtils from '@date-io/moment';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { renderRoutes } from 'react-router-config';
import {
  ScrollReset,
  GoogleAnalytics,
  CookiesNotification
} from './components';

import { SnackbarProvider } from 'notistack';

import { SnackBarProvider } from './context/ToastContext';

import theme from './theme';
import routes from './routes';


import configureStore from './store/store';
import { AuthProvider } from 'context/AuthContext';
import { routWithFetchProvider as FetchProvider } from './context/FetchContext';


const store = configureStore();

function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <SnackbarProvider
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            maxSnack={3}
          >
            <AuthProvider>
              <SnackBarProvider>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <FetchProvider>
                    <ScrollReset />
                    <GoogleAnalytics />
                    <CookiesNotification />
                    {renderRoutes(routes)}
                  </FetchProvider>
                </MuiPickersUtilsProvider>
              </SnackBarProvider>
            </AuthProvider>
          </SnackbarProvider>
        </Router>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
