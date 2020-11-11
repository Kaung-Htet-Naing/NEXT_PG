import React, { useEffect, useContext } from 'react';
import { Page } from 'components';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { TransationInfo } from './components';
import { FetchContext } from '../../../../context/FetchContext';
import { fetchData } from '../../../../store/action';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const TransationDetail = ({ fetchData, detail, match }) => {
  const classes = useStyles();
  const invoiceNo = match.params.invoice_no;
  const fetchContext = useContext(FetchContext);


  useEffect(() => {
    fetchData(fetchContext.getClientTransactionsDetail(invoiceNo))
  }, [fetchData,fetchContext,invoiceNo])

  return (
    <Page
      className={classes.root}
      title="Transation Detail"
    >
      <TransationInfo detail={detail} />
    </Page>
  )
}

const mapStateToProps = ({ transactions }) => {
  return ({
    detail: transactions.detail.data
  })
}
export default connect(mapStateToProps, {
  fetchData
})(TransationDetail);