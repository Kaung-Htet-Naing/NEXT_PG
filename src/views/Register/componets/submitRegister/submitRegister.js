import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setformregister } from '../../../../store/Register/register.action';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Button,
  ListItemIcon,
  ListItemText,
  ListItem,
} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import bytesToSize from 'utils/bytesToSize';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  formGroup: {
    marginBottom: theme.spacing(4)
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
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

const SubmitRegister = ({ history, newprops, setformregister, className, ...rest }) => {

  const classes = useStyles();

  const [file, setfile] = useState({
    NRC_Number: '',
    company_Number: '',
    NRCFile: '',
    RegistrationForm: ''
  });

  const [submiterrors, setsubmiterrors] = useState({
    NRCFileError: '',
    RegistrationFormError: '',
    NRCError: '',
    companyError: '',
  });

  const validate = () => {
    let NRCFileError = '';
    let RegistrationFormError = '';
    let NRCError = '';
    let companyError = '';
    if (!file.NRC_Number > 0) {
      NRCError = '*  NRC Number Required';
    }

    if (!file.company_Number > 0) {
      companyError = '*  Full Name must be 5 characters long!';
    }
    if (file.NRCFile === '') {
      NRCFileError = '*  NRC File Required';
    }

    if (file.RegistrationForm === '') {
      RegistrationFormError = '*  Registration From Required';
    }
    if (NRCFileError || NRCError || RegistrationFormError || companyError) {
      setsubmiterrors({ NRCFileError, NRCError, RegistrationFormError, companyError })
      return false
    }
    return true
  }

  const NRCUploadfile = e => {
    setfile({
      ...file,
      NRCFile: e.target.files[0]
    })

  };

  const FormUploadfile = e => {
    setfile({
      ...file,
      RegistrationForm: e.target.files[0]
    })
  };

  const handleOnChange = event => {
    const { name, value } = event.target;
    setfile({ ...file, [name]: value });
    switch (name) {
      case 'NRC_Number':
        submiterrors.NRCError =
                    value.length < 8
                      ? '*  NRC_Number is required!'
                      : '';
        break;
      case 'company_Number':
        submiterrors.companyError =
                    value.length < 8
                      ? '*  Company_Number is required!'
                      : '';
        break;
      case 'uploadNRC':
        submiterrors.NRCFileError =
                    event.target.files[0] === ''
                      ? '*  UploadNRC is required!'
                      : '';
        break;
      case 'uploadForm':
        submiterrors.companyError =
                    event.target.files[0] === ''
                      ? '*  UploadForm is required!'
                      : '';
        break;
      default:
        break;
    }
    console.log(file)
  };

  const registerSubmit = async (e) => {
    e.preventDefault()

    const data = {
      name: newprops.username,
      client_type_id: newprops.category,
      contact_email: newprops.email,
      contact_phone: newprops.phone,
      nrc_passport_no: file.NRC_Number,
      nrc_passport_file: file.NRCFile,
      company_registration_no: file.company_Number,
      company_documentation_file: file.RegistrationForm,
      aya_bank_account: '12345678945',
    }

    const isvalid = validate()

    if (isvalid) {
      setformregister({
        ...data
      })
      const fd = new FormData()
      fd.append('name', data.name);
      fd.append('client_type_id', data.client_type_id)
      fd.append('contact_email', data.contact_email)
      fd.append('contact_phone', data.contact_phone)
      fd.append('nrc_passport_no', data.nrc_passport_no)
      fd.append('nrc_passport_file', data.nrc_passport_file)
      fd.append('company_registration_no', data.company_registration_no)
      fd.append('company_documentation_file', data.company_documentation_file)
      fd.append('aya_bank_account', data.aya_bank_account)
      try {
        console.log(data)

        const config = {
          method: 'POST',
          headers: { 'Content-Type': 'multipart/form-data' },
          url: '/api/v1/client-register',
          data: fd,
        }
        const response = await Axios(config)
        console.log(response)
        if (response.status === 200) {
          console.log(response)
          history.push('/register?form=2')
        }

      } catch (err) {
        console.error(err)
      }

    } else {
      console.log('invalid')
    }
    console.log(file)

  };

  return (
    <form
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.fields}>
        <TextField
          fullWidth
          label="NRC Number"
          name="NRC_Number"
          onChange={handleOnChange}
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Company Registratin Number"
          name="company_Number"
          onChange={handleOnChange}
          variant="outlined"
        />
        <input
          className={classes.input}
          id="contained-button-file"
          name="NRCFile"
          onChange={NRCUploadfile}
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button
            className={clsx(classes.button, classes.submitButton)}
            color="primary"
            component="span"
            startIcon={<CloudUploadIcon />}
            variant="contained"
          >
                        NRC File Upload
          </Button>
        </label>
        {
          !file.NRCFile ? null :
            <ListItem
              divider={3}
            >
              <ListItemIcon>
                <FileCopyIcon />
              </ListItemIcon>
              <ListItemText
                primary={file.NRCFile.name}
                primaryTypographyProps={{ variant: 'h5' }}
                secondary={bytesToSize(file.NRCFile.size)}
              />
            </ListItem>
        }
        <input
          className={classes.input}
          id="contained-button"
          name="RegistrationForm"
          onChange={FormUploadfile}
          type="file"
        />
        <label htmlFor="contained-button">
          <Button
            className={clsx(classes.button, classes.submitButton)}
            color="primary"
            component="span"
            startIcon={<CloudUploadIcon />}
            variant="contained"
          >
                        Form 6/26 File Upload
          </Button>
        </label>
        {
          !file.RegistrationForm ? null :
            <ListItem
              divider={3}
            >
              <ListItemIcon>
                <FileCopyIcon />
              </ListItemIcon>
              <ListItemText
                primary={file.RegistrationForm.name}
                primaryTypographyProps={{ variant: 'h5' }}
                secondary={bytesToSize(file.RegistrationForm.size)}
              />
            </ListItem>
        }
      </div>
      <Link
        onClick={registerSubmit}
        to="/register?form=2"
      >
        <Button
          className={clsx(classes.button, classes.submitButton)}
          color="primary"
          variant="contained"
        >
                    Submit
        </Button>
      </Link>
    </form>

  )
}

const mapStateToProps = (state) => ({
  newprops: state.reigsterform.formValues
})

const mapDispatchToProps = (dispatch) => ({
  setformregister: item => dispatch(setformregister(item))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubmitRegister))