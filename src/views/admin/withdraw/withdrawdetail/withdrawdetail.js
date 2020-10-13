import React, { useEffect, useContext } from 'react';
import { Page } from 'components';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { WithDrawInfo } from '../../withdraw/withdrawdetail/components';
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

const WithDrawDetail = ({ detail, match, fetchData }) => {
  const classes = useStyles();
  const withDrawID = match.params.id;
  const fetchContext = useContext(FetchContext);

  useEffect(() => {
    fetchData(fetchContext.getWithDrawDetail(withDrawID))
  }, [])


  return (
    <Page
      className={classes.root}
      title="WithDraw Detail"
    >
      <WithDrawInfo detail={detail} />
    </Page>
  )
}

const mapStateToProps = ({ withDraw }) => {
  return ({
    detail: withDraw.detail.data
  })
}
export default connect(mapStateToProps, {
  fetchData
})(WithDrawDetail);