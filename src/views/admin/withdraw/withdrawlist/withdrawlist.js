import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import { Page, Paginate } from 'components';
import { Header, ProjectCard } from './components';
import { connect } from 'react-redux';
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

const WithDrawList = ({ list,  meta, fetchData, history }) => {
  const classes = useStyles();
  const fetchContext = useContext(FetchContext);
  const [withDrawlist, setWithDrawList] = useState([]);
  const { current_page, last_page, total } = meta;

  useEffect(() => {
    fetchData(fetchContext.getWithDrawList())
  }, [fetchData,fetchContext]);

  useEffect(() => {
    setWithDrawList(list);
  }, [list])

  const getWithDrawDetail = (ID) => {
    history.push(`/admin/withdraw/${ID}/detail`);
  }

  const onPaginationChange = ({ selected }) => {
    const pageNo = selected + 1;
    fetchData(fetchContext.getWithDrawListPagination(pageNo))
  }
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
        {withDrawlist.map(data => (
          <ProjectCard
            data={data}
            getWithDrawDetail={getWithDrawDetail}
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

const mapStateToProps = ({ withDraw }) => {
  return {
    list: withDraw.list,
    links: withDraw.links,
    meta: withDraw.meta
  }
}

export default connect(mapStateToProps, {
  fetchData
})(WithDrawList);
