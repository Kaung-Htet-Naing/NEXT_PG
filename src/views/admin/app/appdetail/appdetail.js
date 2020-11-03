import React, { useEffect ,useContext} from 'react';
import { Page } from 'components';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { AppInfo } from './components';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const AppDetail = ({  detail ,match}) => {
  const classes = useStyles();

  const id = match.params.app_id;

  if (!detail.app_id ) return <Redirect to="/admin/app/list" />

  return (
    <Page
      className={classes.root}
      title="App Detail"
    >
      <AppInfo detail={detail}/>
    </Page>
  )
}

const mapStateToProps = ({ appdata }) => {
  return ({ detail: appdata.detail })
}

export default connect(mapStateToProps)(AppDetail);
