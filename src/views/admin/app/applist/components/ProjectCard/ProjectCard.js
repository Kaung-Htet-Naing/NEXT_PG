import React, { useState,useContext ,useEffect ,useRef} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  colors,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AppsTwoToneIcon from '@material-ui/icons/AppsTwoTone';
import { connect } from 'react-redux';
import { fetchData } from 'store/action';
import { FetchContext } from 'context/FetchContext';
import { ToastContext } from 'context/ToastContext';
import { withRouter } from 'react-router-dom';


import { selectdata } from '../../../../../../store/app/action';

const useStyles = makeStyles(theme => ({
  root: {},
  header: {
    paddingBottom: 0
  },
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0
    }
  },
  description: {
    padding: theme.spacing(2, 3, 1, 3)
  },
  tags: {
    padding: theme.spacing(0, 3, 1, 3),
    '& > * + *': {
      marginLeft: theme.spacing(1)
    }
  },
  learnMoreButton: {
    marginLeft: theme.spacing(2)
  },
  likedButton: {
    color: colors.red[600]
  },
  shareButton: {
    marginLeft: theme.spacing(1)
  },
  details: {
    padding: theme.spacing(1, 3)
  }
}));

const ProjectCard = props => {
  const {  className,list,history,selectdata, fetchData,status,...rest } = props;

  const classes = useStyles();
  const fetchContext = useContext(FetchContext);
  const toastContext = useContext(ToastContext);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [disable, setDisable] = useState(false);
  const [password, setPassword] = useState('');
  const [appId, setappId] = useState(0);
  const [datalist, setdatalist] = useState([])
  const [responseStatus, setResponseStatus] = useState('');
  const timer = useRef();


  // useEffect(() => {

  //   if (!loading) {
  //     setSuccess(false);
  //     setLoading(true);
  //     timer.current = setTimeout(() => {
  //       if (status === 200) {
  //         if (appId !== 0) {
  //           history.push(`/admin/app/${appId}/detail`);
  //           setPassword('')
  //         }
  //       }
  //       else {
  //         setResponseStatus('Wrong Password')
  //       }
  //       setSuccess(true);
  //       setLoading(false);
  //     }, [2000]);
  //   }

  // }, [status])

  useEffect(() => {

    if (status === 'DELETE') {
      toastContext.addToast('Successfully deleted.', 'success');
      fetchData(fetchContext.cleanEthic());

      setTimeout(() => {
        setDisable(false);
      }, [3000])

    } else if (status !== 200) {

    }

  }, [status])


  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);


  const handleEditSubmit = (event, data, appID) => {
    event.preventDefault();
    selectdata(data)
    history.push(`/admin/app/${appID}/update`);
  }

  const handleInput = (event) => {
    setPassword(event.target.value)
  }

  const handleDeleteSubmit = (event, appID) => {
    setDisable(true);
    fetchData(fetchContext.deleteData(appID));
  }

  const handleSubmit = (event, appID) => {
    event.preventDefault();
    setappId(appID);
    fetchData(fetchContext.appDetail(appID, password))
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        avatar={
          <AppsTwoToneIcon
            fontSize="large"
          />
        }
        className={classes.header}
        disableTypography
        subheader={
          <Typography
            color="textPrimary"
            variant="body2"
            variant="h6"
          >
            {list.app_id}
          </Typography>
        }
        title={
          <Typography
            color="textPrimary"
            variant="h4"
          >{list.app_name}
          </Typography>
        }
      />
      <Divider />
      <CardContent className={classes.content}>
        <div className={classes.details}>
          <Grid
            alignItems="center"
            container
            justify="space-between"
            spacing={3}
          >
            <Grid item>
              <Tooltip title="Edit">
                <IconButton
                  className={classes.likeButton}
                  onClick={(e) => handleEditSubmit(e, list, list.app_id)}
                  size="small"
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton
                  className={classes.shareButton}
                  onClick={(e) => handleDeleteSubmit(e, list.app_id)}
                  size="small"
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              <Button
                className={classes.learnMoreButton}
                color="primary"
                onClick={handleClickOpen}
                size="small"
              >
                View Detail
              </Button>
              <Dialog
                aria-labelledby="form-dialog-title"
                onClose={handleClose}
                open={open}
                style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
              >
                <DialogTitle id="form-dialog-title">Password</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                              Please Enter Password Again !!!
                  </DialogContentText>
                  <TextField
                    autoFocus
                    fullWidth
                    id="name"
                    label="Enter Password"
                    onChange={handleInput}
                    type="password"
                    variant="outlined"
                  />
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={handleClose}
                    variant="contained"
                  >
                              Cancel
                  </Button>
                  <div className={classes.wrapper}>
                    <Button
                      className={buttonClassname}
                      color="primary"
                      disabled={loading}
                      onClick={(e) => handleSubmit(e, list.app_id)}
                      variant="contained"
                    >
                                Submit
                    </Button>
                    {
                      loading &&
                      <CircularProgress
                        className={classes.buttonProgress}
                        size={24}
                      />
                    }
                  </div>
                </DialogActions>
              </Dialog>
            </Grid>
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
};

ProjectCard.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object.isRequired
};

const mapStateToProps = ({ appdata }) => {
  return {
    appdata: appdata.data,
    status: appdata.status,
  }
}

export default withRouter(connect(mapStateToProps,
  { selectdata, fetchData})(ProjectCard));
