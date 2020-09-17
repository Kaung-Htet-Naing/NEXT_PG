import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Page } from 'components';
import { Header, Results } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

const AppList = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="App List"
    >
      <Header />  
      <Results
        className={classes.results}
      />
    </Page>
  );
};

export default AppList;
