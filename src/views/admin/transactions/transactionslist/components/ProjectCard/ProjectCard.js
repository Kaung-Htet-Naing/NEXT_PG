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
    width: 80,
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
    'Success': colors.green[600]
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
        <div className={classes.header}>
          <Typography>
            {data.id}
          </Typography>
        </div>
        <div className={classes.stats}>
          <Typography
            style={{fontWeight:'550'}}
            variant="h6"
          >{data.invoice_no}</Typography>
          <Typography variant="body2">Invoice No</Typography>
        </div>
        <div className={classes.stats}>
          <Typography
            style={{fontWeight:'550'}}
            variant="h6"
          >{data.wallet_id}</Typography>
          <Typography variant="body2">Wallet Id</Typography>
        </div>
        <div className={classes.stats}>
          <Typography
            style={{fontWeight:'550'}}
            variant="h6"
          >{data.app_id}</Typography>
          <Typography variant="body2">Wallet Id</Typography>
        </div>
        <div className={classes.stats}>
          <Typography
            style={{fontWeight:'550'}}
            variant="h6"
          >{data.amount}</Typography>
          <Typography variant="body2">Amount</Typography>
        </div>
        <div className={classes.stats}>
          <Typography
            style={{fontWeight:'550'}}
            variant="h6"
          >{data.transaction_fee}</Typography>
          <Typography variant="body2">Wallet Id</Typography>
        </div>
        <div className={classes.stats}>
          <Typography
            style={{fontWeight:'550'}}
            variant="h6"
          >{data.net_amount}</Typography>
          <Typography variant="body2">Net Amount</Typography>
        </div>
        <div className={classes.stats}>
          <Typography
            style={{fontWeight:'550'}}
            variant="h6"
          >{data.currency_code}</Typography>
          <Typography variant="body2">Currency Code</Typography>
        </div>
        <div className={classes.stats}>
          <Typography
            style={{fontWeight:'550'}}
            variant="h6"
          >{data.payment_type}</Typography>
          <Typography variant="body2">Payment Type</Typography>
        </div>
        <div className={classes.stats}>
          <Typography
            style={{ color: statusColors[data.status],fontWeight:'550' }}
            variant="h6"
          >{data.status}</Typography>
          <Typography variant="body2">Status</Typography>
        </div>
        <div className={classes.stats}>
          <Typography
            style={{fontWeight:'550'}}
            variant="h6"
          >{data.description}</Typography>
          <Typography variant="body2">Description</Typography>
        </div>
        <div className={classes.stats}>
          <Typography
            style={{fontWeight:'550'}}
            variant="h6"
          >{data.created_at}</Typography>
          <Typography variant="body2">Created At</Typography>
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
