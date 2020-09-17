import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import { Page, Paginate } from 'components';
import { Header, ProjectCard } from './components';
import { connect } from 'react-redux';
import { getClientTransactions, getClientTransactionDetail } from '../../../../store/transactions/action'


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  },
  paginate: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  }
}));

const TransactionsList = (props) => {
  const { transactionlist, getClientTransactions, getClientTransactionDetail
  } = props;
  const classes = useStyles();
  const [rowsPerPage] = useState(10);
  const [page] = useState(0);

  useEffect(() => {
    getClientTransactions()
  }, [getClientTransactions]);

  return (
    <Page
      className={classes.root}
      title="Project Management List"
    >
      <Header />
      <div className={classes.results}>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="body2"
        >
          {transactionlist.length} Records found. Page {page + 1} of{' '}
          {Math.ceil(transactionlist.length / rowsPerPage)}
        </Typography>
        {transactionlist.map(data => (
          <ProjectCard
            data={data}
            getClientTransactionDetail={getClientTransactionDetail}
            key={data.id}
          />
        ))}
      </div>
      <div className={classes.paginate}>
        <Paginate pageCount={3} />
      </div>
    </Page>
  );
};

const mapStateToProps = ({ transactions }) => {
  return {
    transactionlist: transactions.transactionlist,
  }
}

export default connect(mapStateToProps, {
  getClientTransactions, getClientTransactionDetail
})(TransactionsList);
