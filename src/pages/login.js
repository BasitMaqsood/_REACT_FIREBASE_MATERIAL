import React, { useState } from 'react';
import Joi from 'joi-browser';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  makeStyles,
  Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

// import { signInSchema } from 'utils/schema';

import { toast } from 'react-toastify';

const toastTime = {
  autoClose: 2500,
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/">
        Test Application
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  let ref = React.useRef();
  const classes = useStyles();
  const [login, setlogin] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState({});
  const [disabled, setDisabled] = useState(false);



  const handleChanage = ({ target: { id: key, value } }) => {

    eval('set' + key + '(value)');

  };

  const handleSignIn = async () => {

    try {
      // API CALLS HERE
      props.setIsloggedin(true);
    } catch (ex) {
      toast.error(ex.response.data, toastTime);
      setDisabled(false);
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <LoadingBar height={3} color="#3A529C" ref={ref} />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="login"
            label="Email Address"
            name="login"
            autoComplete="login"
            autoFocus
            onChange={handleChanage}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChanage}
          />
          <Button
            fullWidth
            onClick={handleSignIn}
            variant="contained"
            color="primary"
            disabled={disabled}
            className={classes.submit}>
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
