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
  Badge
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import user from '../../../../../../assets/img/client.png'

import IconButton from '@material-ui/core/IconButton';
import Comment from '@material-ui/icons/Comment';
import { Reactions } from './components';

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
  const { list, className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <Badge
              badgeContent={4}
              color="error"
            >
              <Comment />
            </Badge>
          </IconButton>
        }
        avatar={
          <Avatar
            alt="client"
            className={classes.avatar}
            src={user}
          />
        }
        disableTypography
        subheader={
          <div className={classes.subheader}>
            <AccessTimeIcon className={classes.accessTimeIcon} />
            <Typography variant="body2">
              {moment(list.created_at).fromNow()}
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
            {list.opened_by}
          </Link>
        }
      />
      <CardContent className={classes.content}>
        <Typography
          className={classes.message}
          variant="h6"
        >
          {list.title}
        </Typography>
        <Typography
          className={classes.message}
          variant="body1"
        >
          {list.description}
        </Typography>
        {list.photo && (
          <CardActionArea className={classes.mediaArea}>
            <CardMedia
              className={classes.media}
              image={list.photo}
            />
          </CardActionArea>
        )}
        <Reactions
          className={classes.reactions}
          id={list.id}
          post={list}
        />
      </CardContent>
    </Card>
  );
};

PostCard.propTypes = {
  className: PropTypes.string,
  post: PropTypes.object.isRequired
};

export default PostCard;
