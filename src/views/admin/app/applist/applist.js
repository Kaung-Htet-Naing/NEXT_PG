import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Page } from 'components';
import {  Results,Header } from './components';

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
      <Header/>
      <Results
        className={classes.results}
        style={{paddingTop:20}}
      />
    </Page>
  );
};

export default AppList;
