import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  CardMedia,
  Avatar,
  Link,
  Typography,
  Divider
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import { Reactions, CommentBubble, CommentForm } from './components';

const useStyles = makeStyles(theme => ({
  root: {},
  subheader: {
    display: 'flex',
    alignItems: 'center'
  },
  accessTimeIcon: {
    color: theme.palette.text.secondary,
    fontSize: '14px',
    height: 14,
    width: 14,
    marginRight: 6
  },
  content: {
    paddingTop: 0
  },
  message: {
    marginBottom: theme.spacing(2)
  },
  mediaArea: {
    marginBottom: theme.spacing(2)
  },
  media: {
    height: 400,
    backgroundPosition: 'initial'
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

const PostCard = props => {
  const { detail, className, commentsList,...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        avatar={
          <Avatar
            alt="Person"
            className={classes.avatar}
          />
        }
        disableTypography
        subheader={
          <div className={classes.subheader}>
            <AccessTimeIcon className={classes.accessTimeIcon} />
            <Typography variant="body2">
              {moment(detail.created_at).fromNow()}
            </Typography>
          </div>
        }
        title={
          <Link
            color="textPrimary"
            component={RouterLink}
            style={{fontWeight:'550'}}
            to="/profile/1/timeline"
            variant="h5"
          >
            {detail.opened_by}
          </Link>
        }
      />
      <CardContent className={classes.content}>
        <Typography
          className={classes.message}
          variant="h6"
        >
          {detail.title}
        </Typography>
        <Typography
          className={classes.message}
          variant="body1"
        >
          {detail.description}
        </Typography>
        {detail.photo && (
          <CardActionArea className={classes.mediaArea}>
            <CardMedia
              className={classes.media}
              image={detail.photo}
            />
          </CardActionArea>
        )}
        <Reactions
          className={classes.reactions}
          post={detail}
        />
        <Divider className={classes.divider} />
        {
          commentsList&&
          <div className={classes.comments}>
            {commentsList.map(comment => (
              <CommentBubble
                comment={comment}
                key={comment.id}
              />
            ))}
          </div>
        }
        <Divider className={classes.divider} />
        <CommentForm />
      </CardContent>
    </Card>
  );
};

PostCard.propTypes = {
  className: PropTypes.string,
  post: PropTypes.object.isRequired
};

export default PostCard;