import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="flex-end"
        container
        justify="space-between"
        spacing={3}
      >
        <Grid item>
          <Typography
            component="h1"
            variant="h3"
          >
            App List
          </Typography>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
          >
            Add App
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;