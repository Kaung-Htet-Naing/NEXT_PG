import React,{useState,useContext} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import { Avatar,  Typography ,Menu,MenuItem,IconButton} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FetchContext } from '../../../../../../../../context/FetchContext';
import { fetchData } from '../../../../../../../../store/action';
import { connect } from 'react-redux';
import CommentForm  from '../CommentForm';

import admin from '../../../../../../../../assets/img/admin.png'
import client from '../../../../../../../../assets/img/client.png'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginBottom: theme.spacing(2)
  },
  bubble: {
    flexGrow: 1,
    padding: theme.spacing(1),
    marginLeft: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default
  },
  header: {
    display: 'flex',
    alignItems: 'center'
  },
  time: {
    marginLeft: 'auto'
  },
  message: {
    marginTop: theme.spacing(1)
  },
  moreIcon:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  commentEdit: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color:'red'
  }
}));

const CommentBubble = props => {
  const { comment,commentId, issueId,className, fetchData,...rest } = props;

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [edit,setEdit]= useState(false);
  const open = Boolean(anchorEl);
  const fetchContext = useContext(FetchContext);
  const isClient = comment.author.type==='client'? true: false;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseEdit = () => {
    setAnchorEl(null);
    setEdit(true)
  };

  const handleCloseDelete = () => {
    setAnchorEl(null);
    fetchData(fetchContext.deleteComment(commentId))
    fetchData(fetchContext.getCommentsList(issueId))
    console.log('close')
  };


  if (edit) return  <CommentForm
    className={classes.commentEdit}
    description={comment.description}
    edit
    id={commentId}
                    />

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt="Person"
        src={isClient?client:admin}
      />
      <div className={classes.bubble}>
        <div className={classes.header}>
          <Typography
            color="textPrimary"
            variant="h6"
          >
            {comment.author.name}
          </Typography>
          <Typography
            className={classes.time}
            variant="body2"
          >
            {moment(comment.created_at).fromNow()}
          </Typography>
        </div>
        <Typography
          className={classes.message}
          variant="body1"
        >
          {comment.description}
        </Typography>
      </div>
      {
        isClient &&
        <div className={classes.moreIcon}>
          <IconButton
            aria-controls="long-menu"
            aria-haspopup="true"
            aria-label="more"
            display="none"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorPosition
            id="long-menu"
            onClose={handleClose}
            open={open}
          >
            <MenuItem
              onClick={handleCloseEdit}
            >
                Edit
            </MenuItem>
            <MenuItem
              onClick={handleCloseDelete}
            >
                Delete
            </MenuItem>
          </Menu>
        </div>
      }
    </div>
  );
};

CommentBubble.propTypes = {
  className: PropTypes.string,
  comment: PropTypes.object.isRequired
};

export default connect(null,{fetchData})(CommentBubble);
