import React, { useState, useEffect, useContext } from 'react';
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
  DialogTitle
} from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { selectdata } from '../../../../../../store/app/action';
import { withRouter } from 'react-router-dom';
import { fetchData } from 'store/action';
import { FetchContext } from 'context/FetchContext';
import { ToastContext } from 'context/ToastContext';

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
  nameCell: {
    display: 'flex',
    alignItems: 'center'
  },
  actions: {
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-end'
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
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
  const { className,  appdata, selectdata,detail, status, history,  fetchData, ...rest } = props;

  const classes = useStyles();
  const [password, setPassword] = useState('');
  const [appId, setappId] = useState(0);
  const [responseStatus, setResponseStatus] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [disable, setDisable] = useState(false);
  const [datalist, setdatalist] = useState([])
  const fetchContext = useContext(FetchContext);
  const toastContext = useContext(ToastContext);

  useEffect(() => {
    fetchData(fetchContext.appList());
  }, [])

  useEffect(() => {
    setdatalist(appdata)
  }, [appdata])

  useEffect( ()=>{
    if(detail.app_id !== undefined){
      history.push(`/admin/app/${appId}/detail`);
      setPassword('')
    }
    else {
      setResponseStatus('Wrong Password')
    }
  },[detail])

  useEffect(() => {
    if (status === 'DELETE') {
      fetchData(fetchContext.appList());
      toastContext.addToast('Successfully deleted.', 'success');
      fetchData(fetchContext.cleanEthic());
      setTimeout(() => {
        setDisable(false);
      }, [2000])
    }
  }, [status])


  const handleInput = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event, appID) => {
    event.preventDefault();
    setappId(appID);

    try {
      fetchData(fetchContext.appDetail(appID, password))
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteSubmit = (event, appID) => {
    setDisable(true);
    fetchData(fetchContext.deleteData(appID));
  }

  const handleEditSubmit = (event, data, appID) => {
    event.preventDefault();
    selectdata(data)
    history.push(`/admin/app/${appID}/update`);
  }

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
                                color="primary"
                                onClick={(e) => handleSubmit(e, data.app_id)}
                                variant="contained"
                              >
                                Submit
                              </Button>
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
                          disabled={disable}
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
            count={datalist.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
    </div>
  );
};

const mapStateToProps = ({ appdata }) => {
  return {
    appdata: appdata.list,
    status: appdata.status,
    detail:appdata.detail
  }
}

export default withRouter(connect(mapStateToProps, {
  selectdata, fetchData
})(Results));
