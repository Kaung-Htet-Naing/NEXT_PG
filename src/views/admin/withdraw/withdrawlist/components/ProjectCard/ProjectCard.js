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
  const { data, getWithDrawDetail, className, fetchData, list, ...rest } = props;

  const classes = useStyles();

  const statusColors = {
    1: colors.blue[600],
    2: colors.red[600],
    3: colors.orange[600],
    4: colors.green[600]
  };

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
          >{data.wallet_id}</Typography>
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
            style={{ color: statusColors[data.status] ,fontWeight:'550'}}
            variant="h6"
          >{data.status}</Typography>
          <Typography variant="body2">Status</Typography>
        </div>
        <div className={classes.stats}>
          <Typography
            style={{fontWeight:'550'}}
            variant="h6"
          >{data.status_message}</Typography>
          <Typography variant="body2">Status Message</Typography>
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
            onClick={() => getWithDrawDetail(data.id)}
            size="small"
            variant="contained"
          >
            Detail
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default withRouter(ProjectCard);
