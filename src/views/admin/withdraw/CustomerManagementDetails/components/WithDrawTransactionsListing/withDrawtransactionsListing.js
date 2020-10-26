import React,{useEffect,useContext} from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';
import Typography from '@material-ui/core/Typography';
import ReactExport from 'react-export-excel';

import { connect } from 'react-redux';
import { FetchContext } from '../../../../../../context/FetchContext';
import { fetchData } from '../../../../../../store/action';
import {EnhancedTableHead} from 'components';


const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;



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
  { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
  { id: 'invoice_no', numeric: true, disablePadding: false, label: 'Invoice No' },
  { id: 'app_id', numeric: true, disablePadding: false, label: 'App ID' },
  { id: 'amount', numeric: true, disablePadding: false, label: 'Amount' },
  { id: 'transacion_fee', numeric: true, disablePadding: false, label: 'Transaction Fee' },
  { id: 'net_amount', numeric: true, disablePadding: false, label: 'Net Amount' },
  { id: 'status', numeric: true, disablePadding: false, label: 'Status' }
];

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

function WithDrawTransactions({fetchData,list,id}) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('amount');
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const fetchContext = useContext(FetchContext);

  useEffect(() => {
    fetchData(fetchContext.getWithDrawTransactionLIst(id))
  }, [])

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
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
          WithDraw Transaction
          </Typography>
          <Tooltip title="ExcelExport">
            <IconButton aria-label="excelexport">
              <ExcelFile
                element={<GetAppIcon />}
                filename="WithDraw Transaction Table"
              >
                <ExcelSheet
                  data={list}
                  name="WithDraw Transaction Table"
                >
                  <ExcelColumn
                    label="Id"
                    value="id"
                  />
                  <ExcelColumn
                    label="Invoice No"
                    value="invoice_no"
                  />
                  <ExcelColumn
                    label="Wallet Id"
                    value="wallet_id"
                  />
                  <ExcelColumn
                    label="App Id"
                    value="app_id"
                  />
                  <ExcelColumn
                    label="Amount"
                    value="amount"
                  />
                  <ExcelColumn
                    label="Transaction Fee"
                    value="transaction_fee"
                  />
                  <ExcelColumn
                    label="Net Amount"
                    value="net_amount"
                  />
                  <ExcelColumn
                    label="Currency Code"
                    value="currency_code"
                  />
                  <ExcelColumn
                    label="Payment Type"
                    value="payment_type"
                  />
                  <ExcelColumn
                    label="Status"
                    value="status"
                  />
                  <ExcelColumn
                    label="Description"
                    value="description"
                  />
                  <ExcelColumn
                    label="Created At"
                    value="created_at"
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
                .map((data, index) => {

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
                        {data.id}
                      </TableCell>
                      <TableCell align="right">{data.invoice_no}</TableCell>
                      <TableCell align="right">{data.app_id}</TableCell>
                      <TableCell align="right">{data.amount}</TableCell>
                      <TableCell align="right">{data.transaction_fee}</TableCell>
                      <TableCell align="right">{data.net_amount}</TableCell>
                      <TableCell align="right">{data.status}</TableCell>

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
}

const mapStateToProps = ({ withDraw }) => {
  return ({
    list: withDraw.WTlist
  })
}
export default connect(mapStateToProps, {
  fetchData
})(WithDrawTransactions);
