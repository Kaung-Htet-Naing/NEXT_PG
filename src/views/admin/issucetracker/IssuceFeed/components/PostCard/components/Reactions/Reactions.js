import React, { useState } from 'react';
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
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';

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
  shareIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Reactions = props => {
  const { post, className, ...rest } = props;

  const classes = useStyles();

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
        size="small"
        variant="contained"
      >
        <ShareIcon className={classes.shareIcon} />
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
