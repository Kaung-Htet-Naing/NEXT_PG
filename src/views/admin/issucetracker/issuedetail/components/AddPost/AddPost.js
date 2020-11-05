import React, { useState, useRef,useContext,useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Divider,
  IconButton,
  Button,
  TextField,
  Tooltip
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternate';
import { ToastContext } from '../../../../../../context/ToastContext';
import { FetchContext } from '../../../../../../context/FetchContext';
import { AuthContext } from '../../../../../../context/AuthContext';

import { fetchData } from '../../../../../../store/action';
import { connect } from 'react-redux';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    display: 'flex',
    alignItems: 'center'
  },
  paper: {
    flexGrow: 1,
    padding: theme.spacing(0.5, 2),
    flex:1,
    display: 'flex'
  },
  input: {
    width: '100%'
  },
  divider: {
    width: 2,
    height: 24,
    margin:'0 10px'
  },
  formGroup: {
    marginBottom: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  fileInput: {
    display: 'none'
  }
}));

const AddPost = props => {
  const { className,fetchData, ...rest } = props;

  const authContext = useContext(AuthContext);
  const classes = useStyles();
  const fileInputRef = useRef(null);
  const [value, setValue] = useState('');
  const session = useSelector(state => state.session);

  const fetchContext = useContext(FetchContext);
  const toastContext = useContext(ToastContext);
  const [issues,setIssues] = useState({
    title:'',
    description:''
  })

  const handleChange = event => {
    const {name,value}=event.target;

    event.preventDefault();
    setIssues({...issues,[name]:value})
  };

  const handleImageUploadChange = e => {

    setIssues({
      ...issues,
      [e.target.name]: e.target.files[0]
    })
    console.log(e.target.files)
  };

  const handleAttach = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (event)=>{
    event.preventDefault();

    const fd=new FormData();
    fd.append('title',issues.title);
    fd.append('description',issues.description)
    if(issues.imageFile){
      fd.append('photo',issues.imageFile)
    }
    fd.append('photo',issues.imageFile)
    console.log(fd)

    try {
      const config = {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data',
          'Authorization' : `Bearer ${authContext.authState.token}`
        },
        url: '/api/v1/issues',
        data: fd,
      }
      const response = await axios(config);
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <form >
          <div className={classes.formGroup}>
            <TextField
              label="Title"
              name="title"
              onChange={handleChange}
              variant="outlined"
            />
          </div>
          <div className={classes.formGroup}>
            <TextField
              fullWidth
              label="Description"
              multiline
              name="description"
              onChange={handleChange}
              rows={3}
              variant="outlined"
            />
          </div>
          <div className={classes.content}>
            <input
              className={classes.fileInput}
              id="image-file"
              name="imageFile"
              onChange={handleImageUploadChange}
              ref={fileInputRef}
              type="file"
            />
            <label htmlFor="image-file">
              <Tooltip
                title="Attach Image"
              >
                <IconButton
                  edge="end"
                  onClick={handleAttach}
                >
                  <AddPhotoIcon />
                </IconButton>
              </Tooltip>
            </label>
            <Divider className={classes.divider} />
            <Tooltip title="Send">
              <Button
                className={classes.button}
                color="primary"
                endIcon={<SendIcon/>}
                onClick={handleSubmit}
                variant="contained"
              >
                Send
              </Button>
            </Tooltip>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = ({issues})=>{
  return{
    status:issues.status
  }
}

export default connect(mapStateToProps)(AddPost);
