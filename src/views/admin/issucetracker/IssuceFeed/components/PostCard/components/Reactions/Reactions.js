import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Button,
  IconButton,
  Tooltip,
  colors
} from '@material-ui/core';
import RemoveRedEyeSharpIcon from '@material-ui/icons/RemoveRedEyeSharp';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  likeButton: {},
  likedButton: {
    color: colors.red[600]
  },
  shareButton: {
    marginLeft: 'auto'
  },
  viewIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Reactions = props => {
  const { post,id, className, ...rest } = props;

  const classes = useStyles();
  const history = useHistory()

  const viewDetail = (event,id) =>{
    history.push(`/admin/issue-feed/detail/${id}`)
  }

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      {post.merchant_need_reply && (
        <div>
          <Tooltip title="Unlike">
            <IconButton
              className={classes.likedButton}
              size="small"
            >
              <ReportProblemIcon />
            </IconButton>
          </Tooltip>
          <Typography
            color="error"
            variant="h6"
          >
        Merchant Need Reply
          </Typography>
        </div>
      ) }
      <Button
        className={classes.shareButton}
        onClick={(event) => viewDetail(event,id)}
        size="small"
        variant="contained"
      >
        <RemoveRedEyeSharpIcon
          className={classes.viewIcon}
        />
        View
      </Button>
    </div>
  );
};

Reactions.propTypes = {
  className: PropTypes.string,
  post: PropTypes.object.isRequired
};

export default Reactions;
