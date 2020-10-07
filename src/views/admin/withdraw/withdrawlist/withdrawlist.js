import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import { Page, Paginate } from 'components';
import { Header, ProjectCard } from './components';
import { connect } from 'react-redux';
import { getClientTransactions, getClientTransactionDetail } from '../../../../store/transactions/action'

const data = {
  "data": [
    {
      "id": 7,
      "invoice_no": "INV_18322627",
      "wallet_id": "NPI690898",
      "app_id": "443256822865181",
      "amount": "7902.00",
      "transaction_fee": "81.11",
      "net_amount": "5325.90",
      "currency_code": "MMK",
      "payment_type": "MPU",
      "status": "Success",
      "description": "Pay with MPU",
      "created_at": "2020-09-24 20:49:28"
    },
    {
      "id": 140,
      "invoice_no": "INV_91452730",
      "wallet_id": "NPI690898",
      "app_id": "305666170028154",
      "amount": "7043.00",
      "transaction_fee": "82.40",
      "net_amount": "5410.61",
      "currency_code": "MMK",
      "payment_type": "MPU",
      "status": "Success",
      "description": "Pay with MPU",
      "created_at": "2020-09-20 14:17:53"
    },
    {
      "id": 195,
      "invoice_no": "INV_98500104",
      "wallet_id": "NPI690898",
      "app_id": "463968057233050",
      "amount": "8581.00",
      "transaction_fee": "91.43",
      "net_amount": "6003.58",
      "currency_code": "MMK",
      "payment_type": "MPU",
      "status": "Success",
      "description": "Pay with MPU",
      "created_at": "2020-09-21 01:32:55"
    },
    {
      "id": 663,
      "invoice_no": "INV_95661787",
      "wallet_id": "NPI690898",
      "app_id": "239422004092657",
      "amount": "8387.00",
      "transaction_fee": "78.68",
      "net_amount": "5166.33",
      "currency_code": "MMK",
      "payment_type": "MPU",
      "status": "Success",
      "description": "Pay with MPU",
      "created_at": "2020-09-19 06:06:53"
    },
    {
      "id": 673,
      "invoice_no": "INV_76159874",
      "wallet_id": "NPI690898",
      "app_id": "736144866336356",
      "amount": "6147.00",
      "transaction_fee": "128.91",
      "net_amount": "8465.09",
      "currency_code": "MMK",
      "payment_type": "MPU",
      "status": "Success",
      "description": "Pay with MPU",
      "created_at": "2020-09-06 02:49:40"
    },
    {
      "id": 721,
      "invoice_no": "INV_4641249",
      "wallet_id": "NPI690898",
      "app_id": "707585756257323",
      "amount": "7385.00",
      "transaction_fee": "140.37",
      "net_amount": "9217.63",
      "currency_code": "MMK",
      "payment_type": "MPU",
      "status": "Success",
      "description": "Pay with MPU",
      "created_at": "2020-08-27 00:44:37"
    },
    {
      "id": 740,
      "invoice_no": "INV_18903207",
      "wallet_id": "NPI690898",
      "app_id": "327148071754432",
      "amount": "5591.00",
      "transaction_fee": "144.74",
      "net_amount": "9504.27",
      "currency_code": "MMK",
      "payment_type": "MPU",
      "status": "Success",
      "description": "Pay with MPU",
      "created_at": "2020-09-18 19:33:40"
    },
    {
      "id": 839,
      "invoice_no": "INV_17741180",
      "wallet_id": "NPI690898",
      "app_id": "160272691744951",
      "amount": "7027.00",
      "transaction_fee": "76.10",
      "net_amount": "4996.91",
      "currency_code": "MMK",
      "payment_type": "MPU",
      "status": "Success",
      "description": "Pay with MPU",
      "created_at": "2020-09-01 05:53:06"
    },
    {
      "id": 1076,
      "invoice_no": "INV_88825559",
      "wallet_id": "NPI690898",
      "app_id": "160272691744951",
      "amount": "8305.00",
      "transaction_fee": "92.01",
      "net_amount": "6041.99",
      "currency_code": "MMK",
      "payment_type": "MPU",
      "status": "Success",
      "description": "Pay with MPU",
      "created_at": "2020-09-10 20:08:17"
    },
    {
      "id": 1305,
      "invoice_no": "INV_79181901",
      "wallet_id": "NPI690898",
      "app_id": "177225046582425",
      "amount": "8432.00",
      "transaction_fee": "149.84",
      "net_amount": "9839.17",
      "currency_code": "MMK",
      "payment_type": "MPU",
      "status": "Success",
      "description": "Pay with MPU",
      "created_at": "2020-09-05 02:00:09"
    },
    {
      "id": 1320,
      "invoice_no": "INV_13290855",
      "wallet_id": "NPI690898",
      "app_id": "868499743152875",
      "amount": "7556.00",
      "transaction_fee": "127.05",
      "net_amount": "8342.95",
      "currency_code": "MMK",
      "payment_type": "MPU",
      "status": "Success",
      "description": "Pay with MPU",
      "created_at": "2020-09-14 21:29:27"
    },
    {
      "id": 1339,
      "invoice_no": "INV_1126185",
      "wallet_id": "NPI690898",
      "app_id": "832833784106642",
      "amount": "9891.00",
      "transaction_fee": "75.56",
      "net_amount": "4961.45",
      "currency_code": "MMK",
      "payment_type": "MPU",
      "status": "Success",
      "description": "Pay with MPU",
      "created_at": "2020-09-16 06:18:31"
    },
    {
      "id": 1459,
      "invoice_no": "INV_51426260",
      "wallet_id": "NPI690898",
      "app_id": "393690418948017",
      "amount": "7302.00",
      "transaction_fee": "115.49",
      "net_amount": "7583.52",
      "currency_code": "MMK",
      "payment_type": "MPU",
      "status": "Success",
      "description": "Pay with MPU",
      "created_at": "2020-09-21 16:16:17"
    },
    {
      "id": 1503,
      "invoice_no": "INV_21791585",
      "wallet_id": "NPI690898",
      "app_id": "325448475958944",
      "amount": "9477.00",
      "transaction_fee": "129.60",
      "net_amount": "8510.40",
      "currency_code": "MMK",
      "payment_type": "MPU",
      "status": "Success",
      "description": "Pay with MPU",
      "created_at": "2020-09-18 07:43:35"
    },
    {
      "id": 1506,
      "invoice_no": "INV_23375219",
      "wallet_id": "NPI690898",
      "app_id": "916062424664147",
      "amount": "8242.00",
      "transaction_fee": "117.44",
      "net_amount": "7711.57",
      "currency_code": "MMK",
      "payment_type": "MPU",
      "status": "Success",
      "description": "Pay with MPU",
      "created_at": "2020-09-20 01:15:32"
    }
  ]
};

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  },
  paginate: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  }
}));

const WithDrawList = (props) => {
  const { transactionlist, getClientTransactions, getClientTransactionDetail
  } = props;
  const classes = useStyles();
  const [rowsPerPage] = useState(10);
  const [page] = useState(0);

  useEffect(() => {
    getClientTransactions()
  }, [getClientTransactions]);

  return (
    <Page
      className={classes.root}
      title="Project Management List"
    >
      <Header />
      <div className={classes.results}>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="body2"
        >
          {data.data.length} Records found. Page {page + 1} of{' '}
          {Math.ceil(data.data.length / rowsPerPage)}
        </Typography>
        {data.data.map(data => (
          <ProjectCard
            data={data}
            getClientTransactionDetail={getClientTransactionDetail}
            key={data.id}
          />
        ))}
      </div>
      <div className={classes.paginate}>
        <Paginate pageCount={3} />
      </div>
    </Page>
  );
};

const mapStateToProps = ({ transactions }) => {
  return {
    transactionlist: transactions.transactionlist,
  }
}

export default connect(mapStateToProps, {
  getClientTransactions, getClientTransactionDetail
})(WithDrawList);
