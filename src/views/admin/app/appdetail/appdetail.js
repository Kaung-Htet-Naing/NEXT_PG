import React, { useEffect } from 'react';
import { Page } from 'components';
import { makeStyles } from '@material-ui/styles';
import { dataDetail } from '../../../../store/app/action';
import { connect } from 'react-redux';
import { AppInfo } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const AppDetail = ({ match, dataDetail, detail }) => {
  const classes = useStyles();
  const app_id = match.params.app_id;

  useEffect(() => {
    dataDetail(app_id, 'password')
    console.log('dataDetail')
  }, [app_id, dataDetail])


  return (
    <Page
      className={classes.root}
      title="App Detail"
    >
      <AppInfo />
    </Page>
  )
}

const mapStateToProps = ({ appdata }) => {
  return ({ detail: appdata.detail })
}

export default connect(mapStateToProps, {
  dataDetail
})(AppDetail);
