import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import { connect } from 'react-redux';

import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';
import ReactExport from 'react-export-excel';

import { selectdata } from '../../../../../../store/app/action';
import { withRouter } from 'react-router-dom';
import { fetchData } from 'store/action';
import { FetchContext } from 'context/FetchContext';
import { ToastContext } from 'context/ToastContext';
import {EnhancedTableHead} from 'components';


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'key', numeric: false, disablePadding: false, label: 'Key' },
  { id: 'category', numeric: false, disablePadding: false, label: 'Category' },
  { id: 'payment_type', numeric: false, disablePadding: false, label: 'Payment Type' },
  { id: 'actions', numeric: false, disablePadding: false, label: '' }
];

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  toolbarroot: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  title: {
    flex: '1 1 100%',
  }
}));

const Results = props => {
  const {  applist, selectdata,detail, status, history,  fetchData, ...rest } = props;

  const classes = useStyles();
  const [password, setPassword] = useState('');
  const [appId, setappId] = useState(0);
  const [responseStatus, setResponseStatus] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [disable, setDisable] = useState(false);
  const [list, setdatalist] = useState([])
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');

  const fetchContext = useContext(FetchContext);
  const toastContext = useContext(ToastContext);

  useEffect(() => {
    fetchData(fetchContext.appList());
  }, [])

  useEffect(() => {
    setdatalist(applist)
  }, [applist])

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, list.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} >
        <Toolbar className={classes.toolbarroot}>
          <Typography
            className={classes.title}
            component="div"
            id="tableTitle"
            variant="h4"
          >
          APP LIST
          </Typography>
          <Tooltip title="ExcelExport">
            <IconButton aria-label="excelexport">
              <ExcelFile
                element={<GetAppIcon />}
                filename="WithDraw Transaction Table"
              >
                <ExcelSheet
                  data={list}
                  name="App List"
                >
                  <ExcelColumn
                    label="App Name"
                    value="app_name"
                  />
                  <ExcelColumn
                    label="App Id"
                    value="app_id"
                  />
                  <ExcelColumn
                    label="Client Name"
                    value="client_name"
                  />
                  <ExcelColumn
                    label="Category"
                    value="category"
                  />
                  <ExcelColumn
                    label="Payment Type"
                    value="payment_type"
                  />
                  <ExcelColumn
                    label="Platform"
                    value="platform"
                  />
                  <ExcelColumn
                    label="App Type"
                    value="app_type"
                  />
                  <ExcelColumn
                    label="Transaction Fee"
                    value="transaction_fee"
                  />
                  <ExcelColumn
                    label="Frontend Url"
                    value="frontend_url"
                  />
                  <ExcelColumn
                    label="backend_url"
                    value="Backend Url"
                  />
                </ExcelSheet>
              </ExcelFile>
            </IconButton>
          </Tooltip>
        </Toolbar>
        <TableContainer>
          <Table
            aria-label="enhanced table"
            aria-labelledby="tableTitle"
            className={classes.table}
          >
            <EnhancedTableHead
              classes={classes}
              headCells={headCells}
              onRequestSort={handleRequestSort}
              order={order}
              orderBy={orderBy}
            />
            <TableBody>
              {stableSort(list, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((data) => {
                  return (
                    <TableRow
                      hover
                      key={data.id}
                      role="checkbox"
                      tabIndex={-1}
                    >
                      <TableCell
                        component="th"
                        padding="1px"
                        scope="row"
                      >
                        {data.app_name}
                      </TableCell>
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
                  );
                })}
              {emptyRows > 0 && (
                <TableRow >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={list.length}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Paper>
    </div>
  );
};

const mapStateToProps = ({ appdata }) => {
  return {
    applist: appdata.list,
    status: appdata.status,
    detail:appdata.detail
  }
}

export default withRouter(connect(mapStateToProps, {
  selectdata, fetchData
})(Results));
