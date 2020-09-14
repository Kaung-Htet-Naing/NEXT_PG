import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
} from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import { TableEditBar } from 'components';
import { connect } from 'react-redux';
import { appList, dataDetail, deleteData, selectdata } from '../../../../../../store/app/action';
import { withRouter } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  root: {
  },
  filterButton: {
    marginRight: theme.spacing(2)
  },
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1150
  },
  actions: {
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-end'
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: indigo[500],
    '&:hover': {
      backgroundColor: indigo[500],
    },
  },
  fabProgress: {
    color: indigo[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: indigo[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },

}));

const Results = props => {
  const { className, appList, dataDetail, appdata, selectdata, status, history, deleteData, ...rest } = props;

  const classes = useStyles();
  const [password, setPassword] = useState('');
  const [responseStatus, setResponseStatus] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [datalist, setdatalist] = useState([])
  const timer = useRef();

  const handleInput = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event, appID) => {
    event.preventDefault();

    dataDetail(appID, password);
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        if (status === 200) {
          history.push(`/admin/app/${appID}/detail`);
          setPassword('')
        }
        else {
          setResponseStatus('Wrong Password')
        }
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  }

  const handleDeleteSubmit = (event, appID) => {
    event.preventDefault();
    deleteData(appID)
  }

  const handleEditSubmit = (event, data, appID) => {
    event.preventDefault();
    selectdata(data)
    history.push(`/admin/app/${appID}/update`);
  }

  const handleSelectAll = event => {
    const selectedOrders = event.target.checked
      ? appdata.map(data => data.app_id)
      : [];

    setSelectedOrders(selectedOrders);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedOrders.indexOf(id);
    let newSelectedOrders = [];

    if (selectedIndex === -1) {
      newSelectedOrders = newSelectedOrders.concat(selectedOrders, id);
    } else if (selectedIndex === 0) {
      newSelectedOrders = newSelectedOrders.concat(selectedOrders.slice(1));
    } else if (selectedIndex === selectedOrders.length - 1) {
      newSelectedOrders = newSelectedOrders.concat(selectedOrders.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedOrders = newSelectedOrders.concat(
        selectedOrders.slice(0, selectedIndex),
        selectedOrders.slice(selectedIndex + 1)
      );
    }

    setSelectedOrders(newSelectedOrders);
  };

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    appList();
  }, [])

  useEffect(() => {
    setdatalist(appdata)
  }, [appdata])

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography
        color="textSecondary"
        gutterBottom
        variant="body2"
      >
        {datalist.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(datalist.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Key</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Payment Type</TableCell>
                    <TableCell
                      align="center"
                      colSpan={2}
                    >Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {datalist.slice(0, rowsPerPage).map(data => (
                    <TableRow
                      key={data.app_id}
                      selected={selectedOrders.indexOf(data.id) !== -1}
                    >
                      <TableCell>{data.app_name}</TableCell>
                      <TableCell>{data.app_id}</TableCell>
                      <TableCell>{data.category}</TableCell>
                      <TableCell>
                        {data.payment_type}
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          color="primary"
                          onClick={handleClickOpen}
                          size="small"
                          variant="contained"
                        >
                          View
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
                                onClick={(e) => handleSubmit(e, data.app_id)}
                                variant="contained"
                              >
                                Submit
                              </Button>
                              {loading && <CircularProgress
                                className={classes.buttonProgress}
                                size={24}
                              />}
                            </div>
                          </DialogActions>
                        </Dialog>
                        <Button
                          color="secondary"
                          onClick={(e) => handleEditSubmit(e, data, data.app_id)}
                          size="small"
                          style={{ margin: '0 10px' }}
                          variant="contained"
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={(e) => handleDeleteSubmit(e, data.app_id)}
                          size="small"
                          variant="contained"
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={appdata.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBar selected={selectedOrders} />
    </div>
  );
};

const mapStateToProps = ({ appdata }) => {
  return {
    appdata: appdata.data,
    status: appdata.status,
  }
}

export default withRouter(connect(mapStateToProps, {
  appList, dataDetail, deleteData, selectdata
})(Results));
