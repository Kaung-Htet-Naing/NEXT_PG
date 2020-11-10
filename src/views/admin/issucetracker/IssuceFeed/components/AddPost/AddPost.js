import React, { useState, useRef,useContext,useEffect } from 'react';
import { useSelector } from 'react-redux';
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
import { AuthContext } from '../../../../../../context/AuthContext';
import { FetchContext } from '../../../../../../context/FetchContext';
import { ToastContext } from 'context/ToastContext';

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
  const { className,status,fetchData, ...rest } = props;

  const classes = useStyles();
  const fileInputRef = useRef(null);
  const authContext = useContext(AuthContext);
  const fetchContext = useContext(FetchContext);
  const toastContext = useContext(ToastContext);

  const [isDisable,setIsDisable] = useState(true)
  const [issues,setIssues] = useState({
    title:'',
    description:'',
    imageFileType:'',
    imageFileSize:0
  })

  const [errors,setErrors] = useState({
    title:'',
    description:'',
  })

  const handleChange = event => {
    const {name,value}=event.target;

    event.preventDefault();
    setIssues({...issues,[name]:value})
    if(value===' '){
      setErrors({...errors,[name]:`${name.toUpperCase().replace(/_/g, ' ')} is required !`})
      setIssues({...issues,[name]:value})
    }else{
      setIssues({...issues,[name]:value})
      setErrors({...errors,[name]:''})
    }
  };

  // const validate = ()=>{
  //   if(issues.title==='') setErrors({...errors,title:'Title is required !'})
  //   if(issues.description==='') setErrors({...errors,description:'Description is required !'})
  // }

  useEffect(()=>{
    const {title,description,imageFileType }=issues
    if(
      title.length>0 &&
      description.length>0
    ){
      if(
        imageFileType === 'image/jpg' ||
        imageFileType === 'image/jpeg' ||
        imageFileType === 'image/png' ||
        imageFileType === ''
      ){
        setIsDisable(false)
      }
      else setIsDisable(true)
    }
    else setIsDisable(true)
  },[issues])

  const handleImageUploadChange = e => {
    const file = e.target.files[0]
    const {type,size} = e.target.files[0]
    console.log(size)
    setIssues({
      ...issues,
      [e.target.name]: file,
      imageFileType:type,
      imageFileSize:e.target.files[0].size
    })
    if(
      type !== 'image/jpg' &&
      type !== 'image/jpeg' &&
      type !== 'image/png'
    ){
      toastContext.addToast('File Must Be JPG Or JPEG Or PNG.', 'warning');
      fetchData(fetchContext.cleanEthic());
    }

    if( size > 2048000 ){
      toastContext.addToast('File Size Is Greater Than 2MB.', 'warning');
      fetchData(fetchContext.cleanEthic());
    }

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
    // console.log(fd)
    // console.log(issues)
    console.log(errors)

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
      fetchData(fetchContext.getIssuesList())
      toastContext.addToast('Successfully created.', 'success');
      fetchData(fetchContext.cleanEthic());
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
              error={errors.title.length>0?true:false}
              helperText={errors.title.length > 0 ? errors.title : ''}
              label="Title"
              name="title"
              onChange={handleChange}
              variant="outlined"
            />
          </div>
          <div className={classes.formGroup}>
            <TextField
              error={errors.description.length>0?true:false}
              fullWidth
              helperText={errors.description.length > 0 ? errors.description : ''}
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
                disabled={isDisable}
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

export default connect(mapStateToProps,{fetchData})(AddPost);
