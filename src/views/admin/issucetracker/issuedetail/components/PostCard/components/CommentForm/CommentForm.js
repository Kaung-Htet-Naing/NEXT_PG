import React, { useContext, useState ,useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  IconButton,
  Input,
  Paper,
  Tooltip
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { FetchContext } from '../../../../../../../../context/FetchContext';
import { fetchData } from '../../../../../../../../store/action';
import { connect } from 'react-redux';
import user from '../../../../../../../../assets/img/client.png'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  paper: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    padding: theme.spacing(0.5, 2)
  },
  input: {
    width: '100%'
  }
}));

const CommentForm = props => {
  const { className,description,edit,fetchData,id, ...rest } = props;

  const classes = useStyles();
  const fetchContext = useContext(FetchContext);

  const [value, setValue] = useState({description});

  const handleChange = event => {
    event.persist();
    setValue({description:event.target.value});
  };

  const handleUpdateSend = () => {
    fetchData(fetchContext.postCommentEdit(id,value))
    fetchData(fetchContext.getCommentsList(id))
  }

  const handleSubmitSend = () => {
    fetchData(fetchContext.postCommentCreate(id,value))
    fetchData(fetchContext.getCommentsList(id))
  }

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt="Person"
        src={user}
      />{' '}
      <Paper
        className={classes.paper}
        elevation={1}
      >
        <Input
          autoFocus={edit}
          className={classes.input}
          disableUnderline
          onChange={handleChange}
          placeholder={edit?'':'Leave a message'}
          value={value.description}
        />
      </Paper>
      <Tooltip title="Send">
        <IconButton
          color={value.length > 0 ? 'primary' : 'default'}
          onClick={edit?handleUpdateSend:handleSubmitSend}
        >
          <SendIcon/>
        </IconButton>
      </Tooltip>
    </div>
  );
};

CommentForm.propTypes = {
  className: PropTypes.string
};

export default connect(null,{fetchData})(CommentForm);
