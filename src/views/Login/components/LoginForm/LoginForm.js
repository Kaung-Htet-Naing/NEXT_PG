/* eslint-disable no-unused-vars */
import React, { useState, useEffect,useContext } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Axios from 'axios';

import { FetchContext } from '../../../../context/FetchContext';
import { AuthContext } from '../../../../context/AuthContext';
import { fetchData } from '../../../../store/action';

const useStyles = makeStyles(theme => ({
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
  submitButton: {
    marginTop: theme.spacing(2),
    width: '100%'
  }
}));

const LoginForm = props => {
  const { className,fetchData,login, ...rest } = props;
  const { history } = props;
  const classes = useStyles();
  const fetchContext = useContext(FetchContext);
  const authContext = useContext(AuthContext);


  const [inputvalues, setinputvalues] = useState({
    email: '',
    password: '',
  });
  const [loginerror, setloginerror] = useState({
    emailError: '',
    passwordError: '',
    emailandpassworderror: '',
  });

  const handleonchange = (e) => {
    const { name, value } = e.target;
    setinputvalues({
      ...inputvalues,
      [name]: value,
    });
    switch (name) {
      case 'email':
        loginerror.emailError = value.includes('@')
          ? ''
          : '*  Email is not valid!';
        break;
      case 'password':
        loginerror.passwordError =
          value.length < 8 ? '*  Name must be 8 characters long!' : '';
        break;
      default:
        break;
    }
    setloginerror(loginerror);
  };

  const loginvalidate = () => {
    let emailError = '';
    let passwordError = '';
    if (!inputvalues.email > 0) {
      emailError = '*  Email is required';
    }
    if (!inputvalues.password > 0) {
      passwordError = '*  Password required';
    }
    if (emailError || passwordError) {
      setloginerror({ emailError, passwordError });
      return false;
    }
    return true;
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    const res = await Axios.get(
      'https://geolocation-db.com/json/697de680-a737-11ea-9820-af05f4014d91'
    );
    let OSName = '';
    if (navigator.appVersion.indexOf('Win') !== -1) OSName = 'Windows';
    if (navigator.appVersion.indexOf('X11') !== -1) OSName = 'UNIX';
    if (navigator.appVersion.indexOf('Linux') !== -1) OSName = 'Linux';
    if (navigator.appVersion.indexOf('Mac') !== -1) OSName = 'MacOS';

    let browserName = '';
    if (navigator.userAgent.indexOf('Opera') !== -1) browserName = 'Opera';
    if (navigator.userAgent.indexOf('MSIE') !== -1) {
      browserName = 'Microsoft Internet Explorer';
    }
    if (navigator.userAgent.indexOf('Safari') !== -1) browserName = 'Safari';
    if (navigator.userAgent.indexOf('Chrome') !== -1) browserName = 'Chrome';
    if (navigator.userAgent.indexOf('Firefox') !== -1) browserName = 'Firefox';

    const data = {
      email: inputvalues.email,
      password: inputvalues.password,
      ip_address: res.data.IPv4,
      latitude: res.data.latitude,
      longitude: res.data.longitude,
      browser: browserName,
      operating_system: OSName,
    };

    const validatinlogin = loginvalidate();

    if (validatinlogin) {
      fetchData(fetchContext.login(data))
    }
  };

  useEffect(()=>{
    if (login.success === true) {
      const { token } = login.data;
      authContext.setAuthState(token)
      history.push('/admin');
      fetchData(fetchContext.cleanStatus());
      setinputvalues({
        email: '',
        password: ''})
    }
  },[login,history,fetchData,fetchContext,authContext])

  return (
    <form
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.fields}>
        <TextField
          // error={loginerror.emailError.length > 0 ? true : false}
          // helperText={loginerror.emailError.length > 0 ? loginerror.emailError : ''}
          fullWidth
          label="Email address"
          name="email"
          onChange={handleonchange}
          value={inputvalues.email}
          variant="outlined"
        />
        <TextField
          // error={loginerror.passwordError.length > 0 ? true : false}
          // helperText={loginerror.passwordError.length > 0 ? loginerror.passwordError : ''}
          fullWidth
          label="Password"
          name="password"
          onChange={handleonchange}
          type="password"
          value={inputvalues.password}
          variant="outlined"
        />
      </div>
      <Button
        className={classes.submitButton}
        color="secondary"
        onClick={handlesubmit}
        size="large"
        type="submit"
        variant="contained"
      >
        Sign in
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string
};

const mapStateToProps = ({authentication})=>{
  return {
    login:authentication.login
  }
}


export default withRouter(
  connect(mapStateToProps,
    {fetchData})(LoginForm));
