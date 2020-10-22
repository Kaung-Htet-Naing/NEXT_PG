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
  Icon,
  TextField,
  Tooltip
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternate';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { ToastContext } from '../../../../../../context/ToastContext';
import { FetchContext } from '../../../../../../context/FetchContext';
import { fetchData } from '../../../../../../store/action';
import { connect } from 'react-redux';

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

  const classes = useStyles();
  const fileInputRef = useRef(null);
  const [value, setValue] = useState('');
  const session = useSelector(state => state.session);

  const fetchContext = useContext(FetchContext);
  const toastContext = useContext(ToastContext);
  const [issues,setIssues] = useState({
    title:'',
    description:'',
    imageFile:''
  })

  const handleChange = event => {
    const {name,value}=event.target;

    event.preventDefault();
    setIssues({...issues,[name]:value})
    console.log(name)
    console.log(value)
    console.log(issues)
  };

  const handleImageUploadChange = e => {
    setIssues({
      ...issues,
      imageFile: e.target.files[0]
    })
    console.log(e.target.files)
  };

  const handleAttach = () => {
    fileInputRef.current.click();
  };

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
            <label htmlFor="image-file">
              <Tooltip
                id="image-file"
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
            <input
              className={classes.fileInput}
              id="image-file"
              name="imageFile"
              onClick={handleImageUploadChange}
              ref={fileInputRef}
              type="file"
            />
            <Divider className={classes.divider} />
            <Tooltip title="Send">
              <Button
                className={classes.button}
                color="primary"
                endIcon={<Icon>send</Icon>}
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
