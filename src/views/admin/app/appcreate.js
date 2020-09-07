import React, { useEffect, useState } from 'react';
import {
  FormControl,
  Card,
  CardContent,
  TextField,
  MenuItem,
  FormHelperText,
  Grid,
  Icon,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getAppCategories, getPaymentTypes, appCreate, appList } from '../../../store/app/action';
import { connect } from 'react-redux';

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

function AppCreate({ appCreate, getAppCategories, getPaymentTypes, categories, paymentTypes
}) {
  const classes = useStyles();
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
    getAppCategories();
    getPaymentTypes();
  }, []);

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
    console.log(value)

    setCreate({ ...create, [name]: value })
    if (value === "") {
      setError({ ...error, [name]: `${name.toUpperCase().replace(/_/g, " ")} is required !` })
      setCreate({ ...create, [name]: value })
    } else {
      setError({ ...error, [name]: '' })
      setCreate({ ...create, [name]: value })
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = create;

    appCreate(data);
    console.log(error)

    setCreate({
      name: '',
      frontend_url: '',
      backend_url: '',
      category_id: 0,
      payment_type_id: 0,
      platform_id: 0,
    })
  }



  return (

    <div className={classes.rootCenter} >
      <Grid item md={2} sm={2} xs={1} />

      <Grid item md={8} sm={8} xs={10}>
        <Card>
          <CardContent>
            <h3 style={{ paddingBottom: '5rem', textAlign: 'center' }}>App Create</h3>
            <form >
              <div className={classes.formGroup}>
                <TextField
                  fullWidth
                  label="name"
                  name="name"
                  variant="outlined"
                  value={create.name}
                  onChange={handleChange}
                  error={error.name.length > 0 ? true : false}
                  helperText={error.name.length > 0 ? error.name : ""}
                />
              </div>
              <div className={classes.formGroup}>
                <TextField
                  fullWidth
                  label="frontend url"
                  name="frontend_url"
                  variant="outlined"
                  value={create.frontend_url}
                  onChange={handleChange}
                  error={error.frontend_url.length > 0 ? true : false}
                  helperText={error.frontend_url.length > 0 ? error.frontend_url : ""}
                />
              </div>
              <div className={classes.formGroup}>
                <TextField
                  fullWidth
                  label="backend url"
                  name="backend_url"
                  variant="outlined"
                  value={create.backend_url}
                  onChange={handleChange}
                  error={error.backend_url.length > 0 ? true : false}
                  helperText={error.backend_url.length > 0 ? error.backend_url : ""}
                />
              </div>
              <div className={classes.formGroup}>
                <TextField
                  id="outlined-select-currency"
                  select
                  fullWidth
                  label="Select"
                  name="category_id"
                  value={create.category_id}
                  helperText="Please select your category"
                  variant="outlined"
                  onChange={handleChange}
                  error={error.category_id.length > 0 ? true : false}
                  helperText={error.category_id.length > 0 ? error.category_id : ""}
                >
                  <MenuItem value={0} disabled>
                    <em>Select Category</em>
                  </MenuItem>
                  {categories === undefined ? null : categories.map(i => (
                    <MenuItem key={i.id} value={i.id}>
                      {i.name}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className={classes.formGroup}>
                <TextField
                  id="outlined-select-currency"
                  select
                  fullWidth
                  label="Select"
                  name="payment_type_id"
                  value={create.payment_type_id}
                  helperText="Please select your payment type"
                  variant="outlined"
                  onChange={handleChange}
                  error={error.payment_type_id.length > 0 ? true : false}
                  helperText={error.payment_type_id.length > 0 ? error.payment_type_id : ""}
                >
                  <MenuItem value={0} disabled>
                    <em>Select Payment Type</em>
                  </MenuItem>
                  {paymentTypes === undefined ? null : paymentTypes.map(i => (
                    <MenuItem key={i.id} value={i.id}>
                      {i.type}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className={classes.formGroup}>
                <TextField
                  id="outlined-select-currency"
                  select
                  fullWidth
                  label="Select"
                  name="platform_id"
                  value={create.platform_id}
                  helperText="Please select your platform"
                  variant="outlined"
                  onChange={handleChange}
                  error={error.platform_id.length > 0 ? true : false}
                  helperText={error.platform_id.length > 0 ? error.platform_id : ""}
                >
                  <MenuItem value={0} disabled>
                    <em>Select Platform</em>
                  </MenuItem>
                  {platformID.map(i => (
                    <MenuItem key={i.value} value={i.value}>
                      {i.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
                onClick={handleSubmit}
                disabled={disable}
              >
                Send
                </Button>
            </form>

          </CardContent>
        </Card>
      </Grid>

      <Grid item md={2} sm={2} xs={1} />
    </div>
  );
}

const mapStateToProps = ({ categories, paymentTypes }) => {
  return {
    categories: categories.categories,
    paymentTypes: paymentTypes.payment_types
  }
}

export default connect(mapStateToProps, {
  getAppCategories, getPaymentTypes, appCreate, appList
})(AppCreate);
