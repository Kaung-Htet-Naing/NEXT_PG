import React, { useEffect, useState } from 'react';
import { Page } from 'components';
import { makeStyles } from '@material-ui/styles';
import { getClientTransactionDetail } from '../../../../store/transactions/action';
import { connect } from 'react-redux';
import { TransationInfo } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const TransationDetail = (props) => {
  const classes = useStyles();
  const { getClientTransactionDetail, detail, match } = props;
  const invoiceNo = match.params.invoice_no;

  useEffect(() => {
    getClientTransactionDetail(invoiceNo);
  }, [])

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
    detail: transactions.transactiondetail
  })
}
export default connect(mapStateToProps, {
  getClientTransactionDetail
})(TransationDetail);