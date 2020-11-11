import React, { useEffect ,useContext} from 'react';
import { Page } from 'components';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { AppInfo } from './components';
import { Redirect } from 'react-router-dom';


import { fetchData } from 'store/action';
import { FetchContext } from 'context/FetchContext';
import { dataDetail } from 'store/app/action';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const AppDetail = ({  detail,fetchData,match ,password}) => {
  const classes = useStyles();
  const id = match.params.app_id
  const fetchContext = useContext(FetchContext);

  useEffect(()=>{
    dataDetail(id, password)
    fetchData(fetchContext.cleanPassword())
  },[fetchData,fetchContext,id,password])

  if (!detail.app_id) return <Redirect to="/admin/app/list" />

  return (
    <Page
      className={classes.root}
      title="App Detail"
    >
      <AppInfo detail={detail}/>
    </Page>
  )
}

const mapStateToProps = (store) => {
  return ({
    password: store.detailPassword.password,
    detail : store.appdata.detail
  })
}


export default connect(mapStateToProps,{fetchData})(AppDetail);
