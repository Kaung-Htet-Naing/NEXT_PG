import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardContent,
  Typography,
  colors
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2)
  },
  content: {
    padding: theme.spacing(2),
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexWrap: 'wrap'
    },
    '&:last-child': {
      paddingBottom: theme.spacing(2)
    }
  },
  header: {
    maxWidth: '100%',
    width: 240,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
      flexBasis: '100%'
    }
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  stats: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%'
    }
  },
  actions: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%'
    }
  }
}));

const ProjectCard = props => {
  const { data, getClientTransactionDetail, history, className, ...rest } = props;

  const classes = useStyles();

  const statusColors = {
    'Pending': colors.orange[600],
    'Fail': colors.red[600],
    Success: colors.green[600]
  };

  const handleClick = (invoiceNo) => {
    history.push(`/admin/transaction/${invoiceNo}/detail`);
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <div className={classes.stats}>
          <Typography>
            {data.id}
          </Typography>
        </div>
        <div className={classes.stats}>
          <Typography >
            {data.invoice_no}
          </Typography>
        </div>
        <div className={classes.stats}>
          <Typography >{data.wallet_id}</Typography>
        </div>
        <div className={classes.stats}>
          <Typography >
            {data.app_id}
          </Typography>
        </div>
        <div className={classes.stats}>
          <Typography >
            {data.amount}
          </Typography>
        </div>
        <div className={classes.stats}>
          <Typography >
            {data.transaction_fee}
          </Typography>
        </div>
        <div className={classes.stats}>
          <Typography >
            {data.net_amount}
          </Typography>
        </div>
        <div className={classes.stats}>
          <Typography >
            {data.currency_code}
          </Typography>
        </div>
        <div className={classes.stats}>
          <Typography >
            {data.payment_type}
          </Typography>
        </div>
        <div className={classes.stats}>
          <Typography style={{ color: statusColors[data.status] }}>
            {data.status}
          </Typography>
        </div>
        <div className={classes.stats}>
          <Typography >
            {data.description}
          </Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
            {data.created_at}
          </Typography>
        </div>
        <div className={classes.actions}>
          <Button
            color="primary"
            onClick={() => handleClick(data.invoice_no)}
            size="small"
            variant="contained"
          >
            View
          </Button>
        </div>
      </CardContent>
    </Card >
  );
};

export default withRouter(ProjectCard);
