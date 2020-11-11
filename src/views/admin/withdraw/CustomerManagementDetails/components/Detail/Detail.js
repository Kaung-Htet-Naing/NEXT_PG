import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux'
import { fetchData } from '../../../../../../store/action';
import Card from '@material-ui/core/Card';

import { WithDrawInfo } from './components';

const useStyles = makeStyles(() => ({
  image:{
    width:'100%'
  }
}));

const Detail = props => {
  const { className,fetchData,detail,id, ...rest } = props;

  const classes = useStyles();

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}
    >
      <Grid
        item
        lg={6}
        md={6}
        xl={3}
        xs={12}
      >
        <WithDrawInfo detail={detail} />
      </Grid>
      <Grid
        item
        lg={6}
        md={6}
        xl={3}
        xs={12}
      >
        <Card className={classes.root} >
          <img
            alt="payment_slip"
            className={classes.image}
            src={detail.payment_slip}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

Detail.propTypes = {
  className: PropTypes.string
};

export default connect(null, {
  fetchData
})(Detail);