import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setformregister } from '../../../../store/Register/register.action';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  MenuItem,
  Button
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  fields: {
    margin: theme.spacing(-1),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1)
    }
  },
  policy: {
    display: 'flex',
    alignItems: 'center'
  },
  policyCheckbox: {
    marginLeft: '-14px'
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: '100%'
  }
}));

const RegisterForm = ({ history, setformregister, className, ...rest }) => {
  const classes = useStyles();

  const [inputValues, setInputValues] = useState({
    email: '',
    phone: '',
    category: '',
    username: ''
  });
  const [errors, seterrors] = useState({
    nameError: '',
    categoryError: '',
    emailError: '',
    phoneError: ''
  });

  const validateForm = () => {
    let emailError = '';
    let categoryError = '';
    let nameError = '';
    let phoneError = '';
    if (!inputValues.email > 0) {
      emailError = '*  Email is not valid!';
    }
    console.log(1)
    if (!inputValues.category > 0) {
      categoryError = '*  Choose one';
    }
    console.log(2)
    if (!inputValues.phone > 0) {
      phoneError = '*  Phone No is Required!'
    }

    if (!inputValues.username > 0) {
      nameError = '*  Full Name must be 5 characters long!'
    }
    if (emailError || categoryError || nameError || phoneError) {
      seterrors({ emailError, categoryError, nameError, phoneError })
      return false
    }
    return true
  }

  const handleOnChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'username':
        errors.nameError =
                    value.length < 5
                      ? '* Full Name must be 5 characters long!'
                      : '';
        break;
      case 'email':
        errors.emailError =
                    value.includes('@')
                      ? ''
                      : '*  Email is not valid!';
        break;
      case 'phone':
        errors.phoneError =
                    value.length < 8
                      ? '*  Phone No is Required!'
                      : '';
        break;
      case 'category':
        errors.categoryError =
                    value.length === 0
                      ? 'choose one '
                      : '';
        break;
      default:
        break;
    }
    setInputValues({ ...inputValues, [name]: value });
    seterrors(errors)
    console.log(inputValues)
  };



  const handleonNext = async (event) => {
    event.preventDefault();
    const isvalid = validateForm()
    if (isvalid) {
      console.info('Valid Form')
      setformregister(
        inputValues
      );
      history.push('./register?form=1')
    } else {
      console.error('Invalid Form')
    }

  }

  const { nameError, categoryError, emailError, phoneError } = errors;
  return (

    <form
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.fields}>
        <TextField
          error={nameError.length > 0 ? true : false}
          fullWidth
          helperText={nameError.length > 0 ? nameError : ''}
          label="Full Name"
          name="username"
          onChange={handleOnChange}
          value={inputValues.name}
          variant="outlined"
        />
        <TextField
          error={categoryError.length > 0 ? true : false}
          fullWidth
          helperText={categoryError.length > 0 ? categoryError : ''}
          id="outlined-select-currency"
          label="category"
          name="category"
          onChange={handleOnChange}
          select
          value={inputValues.category}
          variant="outlined"
        >
          <MenuItem
            disabled
            value={0}
          >
            <em>Select Category</em>
          </MenuItem>
          <MenuItem value={1}>Company</MenuItem>
          <MenuItem value={2}>Developer</MenuItem>
          <MenuItem value={3}>Online Shop</MenuItem>
        </TextField>
        <TextField
          error={emailError.length > 0 ? true : false}
          fullWidth
          helperText={emailError.length > 0 ? emailError : ''}
          label="E-mail Address"
          name="email"
          onChange={handleOnChange}
          value={inputValues.email}
          variant="outlined"
        />
        <TextField
          error={phoneError.length > 0 ? true : false}
          fullWidth
          helperText={phoneError.length > 0 ? phoneError : ''}
          label="Contact Phone"
          name="phone"
          onChange={handleOnChange}
          value={inputValues.phone}
          variant="outlined"
        />
      </div>
      <Link to="/register?form=1">
        <Button
          className={clsx(classes.button, classes.submitButton)}
          color="primary"
          onClick={handleonNext}
          variant="contained"
        >
                    Next
        </Button>
      </Link>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setformregister: item => dispatch(setformregister(item))
})

export default withRouter(connect(null, mapDispatchToProps)(RegisterForm));