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

import {SnackBarProvider} from './context/ToastContext';

import theme from './theme';
import routes from './routes';
import Alert from './components/Alert';


import  configureStore  from './store/store';


const store = configureStore();

function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          maxSnack={3}
        >
          <SnackBarProvider>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Router>
                <ScrollReset />
                <GoogleAnalytics />
                <CookiesNotification />
                {renderRoutes(routes)}
              </Router>
            </MuiPickersUtilsProvider>
          </SnackBarProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
