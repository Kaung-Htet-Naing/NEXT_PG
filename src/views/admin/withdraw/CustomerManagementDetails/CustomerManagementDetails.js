import React,{useEffect,useContext,useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';
import { Page } from 'components';
import {  Detail, WithDrawTransactionsListing } from '../CustomerManagementDetails/components';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { FetchContext } from '../../../../context/FetchContext';
import { fetchData } from '../../../../store/action';
import { Typography, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  tabs: {
    marginTop: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

const WithDrawDetails = props => {
  const { match, history ,fetchData,detail,status} = props;
  const classes = useStyles();
  const { id, tab } = match.params;
  const fetchContext = useContext(FetchContext);
  const [isDisabled,setIsDisabled]=useState(true);
  const [withdrawDetail,setWihdrawDetail]=useState({});

  useEffect(() => {
    fetchData(fetchContext.getWithDrawDetail(id))
  }, [])

  useEffect( ()=>{
    if(status===3){
      setIsDisabled(false)
    }
    setWihdrawDetail(detail)
  },[status,detail])

  const handleTabsChange = (event, value) => {
    history.push(value);
  };

  const tabs = [
    { value: 'detail', label: 'Detail' },
    { value: 'withdrawtransaction', label: 'WithDraw Transaction' }
  ];

  const handleApprove=()=>{
    fetchData(fetchContext.closeWithDraw(id))
  }

  return (
    <Page
      className={classes.root}
      title="WithDraw Details"
    >
      <div >
        <Grid
          alignItems="flex-end"
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              component="h2"
              gutterBottom
              variant="overline"
            >
            WithDraw
            </Typography>
            <Typography
              component="h1"
              variant="h3"
            >
              {tab==='detail'?'Detail':'Transaction'}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              component={RouterLink}
              disabled={isDisabled}
              onClick={handleApprove}
              to="/projects/create"
              variant="contained"
            >
            Approve
            </Button>
          </Grid>
        </Grid>
      </div>
      <Tabs
        className={classes.tabs}
        onChange={handleTabsChange}
        scrollButtons="auto"
        value={tab}
        variant="scrollable"
      >
        {tabs.map(tab => (
          <Tab
            key={tab.value}
            label={tab.label}
            value={tab.value}
          />
        ))}
      </Tabs>
      <Divider className={classes.divider} />
      <div className={classes.content}>
        {
          tab === 'detail' &&
        <Detail
          detail={withdrawDetail}
          id={id}
        />}
        {tab === 'withdrawtransaction' && <WithDrawTransactionsListing id={id}/>}
      </div>
    </Page>
  );
};

const mapStateToProps = ({ withDraw }) => {
  return ({
    detail: withDraw.detail.data,
    status:withDraw.status
  })
}

export default connect(mapStateToProps, {
  fetchData
})(WithDrawDetails);