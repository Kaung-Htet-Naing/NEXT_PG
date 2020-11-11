import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import { Page, Paginate } from 'components';
import { Header, ProjectCard } from './components';
import { connect } from 'react-redux';
import { getClientTransactions, getClientTransactionDetail } from '../../../../store/transactions/action'
import { FetchContext } from '../../../../context/FetchContext';
import { fetchData } from '../../../../store/action';

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

const TransactionsList = ({ list, fetchData, links, meta
}) => {
  const classes = useStyles();
  const fetchContext = useContext(FetchContext);
  const [transactionsList, setTransactionslist] = useState([]);
  const { current_page, last_page, total } = meta;

  useEffect(() => {
    fetchData(fetchContext.getClientTransactions())
  }, [fetchData,fetchContext]);

  useEffect(() => {
    setTransactionslist(list)
  }, [list])

  const onPaginationChange = ({ selected }) => {
    const pageNo = selected + 1;
    fetchData(fetchContext.getClientTransactionsPagination(pageNo))
  }

  console.log('links', links);
  console.log('meta', meta)

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
          {total} Records found. Page {current_page} of{' '}
          {last_page}
        </Typography>
        {transactionsList.map(data => (
          <ProjectCard
            data={data}
            key={data.id}
          />
        ))}
      </div>
      <div className={classes.paginate}>
        {total > 15 && <Paginate
          onPageChange={onPaginationChange}
          pageCount={3}
                       />
        }
      </div>
    </Page>
  );
};

const mapStateToProps = ({ transactions }) => {
  return {
    list: transactions.list,
    links: transactions.links,
    meta: transactions.meta
  }
}

export default connect(mapStateToProps, {
  getClientTransactions, getClientTransactionDetail, fetchData
})(TransactionsList);
