import React, { useContext, useState ,useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  IconButton,
  Input,
  Paper,
  Tooltip,
  Divider
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Cancel from '@material-ui/icons/Cancel';
import { FetchContext } from '../../../../../../../../context/FetchContext';
import { fetchData } from '../../../../../../../../store/action';
import { connect } from 'react-redux';
import user from '../../../../../../../../assets/img/client.png'
import CommentBubble from '../CommentBubble'

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
  },
  divider: {
    width: 1,
    height: 24
  },
  cancalButton:{
    color:'#ff4d4d'
  }
}));

const CommentForm = props => {
  const { className,comment,description='',status,edit,fetchData,id, commentId,...rest } = props;

  const classes = useStyles();
  const fetchContext = useContext(FetchContext);

  const [value, setValue] = useState({description});
  const [isDoneEdit,setIsDoneEdit] = useState(false)

  useEffect(()=>{
    if(status === 'EDIT' || status === 'CREATE'){
      fetchData(fetchContext.getCommentsList(id))
      fetchData(fetchContext.cleanEthic())
    }
  },[status,fetchData,fetchContext,id])

  useEffect(()=>{
    setValue({description})
  },[description])

  const handleChange = event => {
    event.persist();
    setValue({description:event.target.value});
  };

  const handleUpdateSend = () => {
    if(commentId !== undefined){
      fetchData(fetchContext.postCommentEdit(commentId,value))
      setIsDoneEdit(true)
    }
    console.log('id',commentId)
    console.log('value',value)
  }

  const handleSubmitSend = () => {
    fetchData(fetchContext.postCommentCreate(id,value))
    setValue({description:''})
  }

  if(isDoneEdit){
    return(
      <CommentBubble
        comment={comment}
        issueId={id}
      />
    )
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
      {
        edit &&
          <Tooltip title="Cancel">
            <IconButton
              className={classes.cancalButton}
              onClick={()=>setIsDoneEdit(true)}
            >
              <Cancel />
            </IconButton>
          </Tooltip>
      }
      <Divider className={classes.divider}/>
      <Tooltip title="Send">
        <IconButton
          color={value.description.length > 0 ? 'primary' : 'default'}
          onClick={edit?handleUpdateSend:handleSubmitSend}
          type="submit"
        >
          <SendIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

CommentForm.propTypes = {
  className: PropTypes.string,
  comment:PropTypes.object,
  commentId:PropTypes.number,
  description:PropTypes.string,
  edit:PropTypes.bool.isRequired,
  fetchData:PropTypes.func.isRequired,
  id:PropTypes.string.isRequired,
  status:PropTypes.oneOf([null,'EDIT','CREATE'])
};

const mapStateToProps = ({issues})=>{
  return{
    status:issues.status
  }
}

export default connect(mapStateToProps,{fetchData})(CommentForm);
