import React, { useEffect, useState, useContext } from 'react';
import {
  Card,
  CardContent,
  TextField,
  MenuItem,
  Grid,
  Icon,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FetchContext } from '../../../context/FetchContext';
import { ToastContext } from '../../../context/ToastContext';
import { fetchData } from '../../../store/action';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  rootCenter: {
    marginTop: '10px',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    margin: theme.spacing(1),
  },
  cardCenter: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  formGroup: {
    marginBottom: theme.spacing(4)
  },
  fieldGroup: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },
  fieldHint: {
    margin: theme.spacing(1, 0)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const platformID = [
  {
    label: 'Web',
    value: 1,
  },
  {
    label: 'Android',
    value: 2,
  },
  {
    label: 'IOS',
    value: 3,
  }
];

function AppCreate({
  categories, payments, fetchData, status, history
}) {
  const classes = useStyles();
  const fetchContext = useContext(FetchContext);
  const toastContext = useContext(ToastContext);
  const [create, setCreate] = useState({
    name: '',
    frontend_url: '',
    backend_url: '',
    category_id: 0,
    payment_type_id: 0,
    platform_id: 0,
    app_type_id: 1,
  })
  const [error, setError] = useState({
    name: '',
    frontend_url: '',
    backend_url: '',
    category_id: '',
    payment_type_id: '',
    platform_id: '',
  });

  const [disable, setDisable] = useState(true);

  useEffect(() => {
    fetchData(fetchContext.getappCategories());
    fetchData(fetchContext.getappPayments());
  }, [fetchData, fetchContext]);

  useEffect(() => {

    if (status === 'SUCCESS') {
      toastContext.addToast('Successfully created.', 'success');
      fetchData(fetchContext.cleanEthic());
      history.push('/admin/app/list')
    }
    console.log(status);

  }, [status])

  useEffect(() => {
    const { name, frontend_url, backend_url, category_id, payment_type_id, platform_id } = create;

    if (
      name.length > 0 &&
      frontend_url.length > 0 &&
      backend_url.length > 0 &&
      category_id !== 0 &&
      payment_type_id !== 0 &&
      platform_id !== 0
    ) {
      setDisable(false)
    }
    else {
      setDisable(true)
    }
  }, [create])

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCreate({ ...create, [name]: value })
    if (value === ' ') {
      setError({ ...error, [name]: `${name.toUpperCase().replace(/_/g, ' ')} is required !` })
      setCreate({ ...create, [name]: value })
    } else {
      setError({ ...error, [name]: '' })
      setCreate({ ...create, [name]: value })
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = create;

    fetchData(fetchContext.appCreate(data));

    setCreate({
      name: '',
      frontend_url: '',
      backend_url: '',
      category_id: 0,
      payment_type_id: 0,
      platform_id: 0,
      app_type_id: 1,
    })
  }

  return (
    <div className={classes.rootCenter} >
      <Grid
        item
        md={2}
        sm={2}
        xs={1}
      />

      <Grid
        item
        md={8}
        sm={8}
        xs={10}
      >
        <Card>
          <CardContent>
            <h3 style={{ paddingBottom: '5rem', textAlign: 'center' }}>App Create</h3>
            <form >
              <div className={classes.formGroup}>
                <TextField
                  error={error.name.length > 0 ? true : false}
                  fullWidth
                  helperText={error.name.length > 0 ? error.name : ''}
                  label="name"
                  name="name"
                  onChange={handleChange}
                  value={create.name}
                  variant="outlined"
                />
              </div>
              <div className={classes.formGroup}>
                <TextField
                  error={error.frontend_url.length > 0 ? true : false}
                  fullWidth
                  helperText={error.frontend_url.length > 0 ? error.frontend_url : ''}
                  label="frontend url"
                  name="frontend_url"
                  onChange={handleChange}
                  value={create.frontend_url}
                  variant="outlined"
                />
              </div>
              <div className={classes.formGroup}>
                <TextField
                  error={error.backend_url.length > 0 ? true : false}
                  fullWidth
                  helperText={error.backend_url.length > 0 ? error.backend_url : ''}
                  label="backend url"
                  name="backend_url"
                  onChange={handleChange}
                  value={create.backend_url}
                  variant="outlined"
                />
              </div>
              <div className={classes.formGroup}>
                <TextField
                  error={error.category_id.length > 0 ? true : false}
                  fullWidth
                  helperText="Please select your category"
                  helperText={error.category_id.length > 0 ? error.category_id : ''}
                  id="outlined-select-currency"
                  label="Select"
                  name="category_id"
                  onChange={handleChange}
                  select
                  value={create.category_id}
                  variant="outlined"
                >
                  <MenuItem
                    disabled
                    value={0}
                  >
                    <em>Select Category</em>
                  </MenuItem>
                  {categories.length > 0 ? categories.map(i => (
                    <MenuItem
                      key={i.id}
                      value={i.id}
                    >
                      {i.name}
                    </MenuItem>
                  )) : null}
                </TextField>
              </div>
              <div className={classes.formGroup}>
                <TextField
                  error={error.payment_type_id.length > 0 ? true : false}
                  fullWidth
                  helperText="Please select your payment type"
                  helperText={error.payment_type_id.length > 0 ? error.payment_type_id : ''}
                  id="outlined-select-currency"
                  label="Select"
                  name="payment_type_id"
                  onChange={handleChange}
                  select
                  value={create.payment_type_id}
                  variant="outlined"
                >
                  <MenuItem
                    disabled
                    value={0}
                  >
                    <em>Select Payment Type</em>
                  </MenuItem>
                  {payments.length > 0 ? payments.map(i => (
                    <MenuItem
                      key={i.id}
                      value={i.id}
                    >
                      {i.type}
                    </MenuItem>
                  )) : null}
                </TextField>
              </div>
              <div className={classes.formGroup}>
                <TextField
                  error={error.platform_id.length > 0 ? true : false}
                  fullWidth
                  helperText="Please select your platform"
                  helperText={error.platform_id.length > 0 ? error.platform_id : ''}
                  id="outlined-select-currency"
                  label="Select"
                  name="platform_id"
                  onChange={handleChange}
                  select
                  value={create.platform_id}
                  variant="outlined"
                >
                  <MenuItem
                    disabled
                    value={0}
                  >
                    <em>Select Platform</em>
                  </MenuItem>
                  {platformID.map(i => (
                    <MenuItem
                      key={i.value}
                      value={i.value}
                    >
                      {i.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <Button
                className={classes.button}
                color="primary"
                disabled={disable}
                endIcon={<Icon>send</Icon>}
                onClick={handleSubmit}
                variant="contained"
              >
                Send
              </Button>
            </form>

          </CardContent>
        </Card>
      </Grid>

      <Grid
        item
        md={2}
        sm={2}
        xs={1}
      />
    </div>
  );
}

const mapStateToProps = ({ appdata, categories, paymentTypes }) => {
  return {
    categories: categories.categories,
    payments: paymentTypes.payments,
    status: appdata.status
  }
}

export default withRouter(connect(mapStateToProps, { fetchData })(AppCreate));
