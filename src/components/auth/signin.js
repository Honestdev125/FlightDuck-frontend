import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link, Redirect, withRouter } from 'react-router-dom';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { signin, authenticate, isAuthenticated, facebookSignIn } from "./helper/index";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { CircularProgress } from '@material-ui/core';
import socialMediaLoginAPI from './helper/social-login';
import SweetAlert from 'react-bootstrap-sweetalert';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    errorMessage: "Check all fields again",
    success: false,
    loading: false,
    didRedirect: false,
    alert: null
  });
  const { name, email, password, error, errorMessage, success, 
    loading, didRedirect, alert } =
    values;

  const handleChange = (name) =>
    (event) => {
      setValues({ ...values, error: false, [name]: event.target.value });
  };

  const hideAlert = (event) =>  {
    setValues({ ...values, alert: null, error: false });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    // return <Redirect to="/user-profile" />;

    signin({ email, password })
      .then((data) => {
        if (data.email) {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
          performRedirect();
        } else {
          setValues({
            ...values,
            loading: false,
            error: true,
            errorMessage: data.error
          });
        }
      })
      .catch((e) => console.log(e));
  };

  const performRedirect = () => {
    if (isAuthenticated()) {
      return <Redirect to="/user-profile" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="preloader" id="preloader">
          <div className="preloader-inner">
            <div className="spinner">
              <div className="dot1"></div>
              <div className="dot2"></div>
            </div>
          </div>
        </div>
      )
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account created successfully. Please <Link
              to="/signin"
            >
              login now.
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const errorAlertDialog = () => {
    return (
      error && (        
        <SweetAlert
          warning
          title="Error"
          onConfirm={hideAlert}
        >
          {errorMessage}
        </SweetAlert>
      )
    );
  };

  const fbResponse = async (response) => {
    socialMediaLoginAPI(
      response.accessToken, 'facebook'
    ).then((res) => {
      if (res.data){
        localStorage.setItem('access_token', res.data.access_token);
        localStorage.setItem('refresh_token', res.data.refresh_token);
        authenticate(response, () => {
          setValues({
            ...values,
          });
        });
      } else {
        setValues({
          ...values,
          loading: false,
          error: true,
          errorMessage: "Something went wrong."
        });
      }
    });
  }

  const googleResponse = (response) => {
    socialMediaLoginAPI(
      response.accessToken, 'google-oauth2'
    ).then((res) => {
      if (res.data){
        localStorage.setItem('access_token', res.data.access_token);
        localStorage.setItem('refresh_token', res.data.refresh_token);
        let profile = values;
        profile.email = response.profileObj.email;
        profile.first_name = response.profileObj.givenName;
        profile.last_name = response.profileObj.familyName;
        authenticate(profile, () => {
          setValues({
            ...profile,
          });
        });
      } else {
        setValues({
          ...values,
          loading: false,
          error: true,
          errorMessage: "Something went wrong."
        });
      }
    });
  }

  const signInForm = () => {
    return (
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
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value = {email}
            onChange = {handleChange("email")}
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
            value = {password}
            onChange = {handleChange("password")}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            onClick={onSubmit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
        <FacebookLogin
          textButton="LOGIN WITH FACEBOOK"
          appId= "457311055737194"
          fields="first_name, last_name, email"
          callback={fbResponse}
        />
        <GoogleLogin
          clientId="505021799404-041pr2rnqd88ge6bfqicemlam2vhc0lo.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={googleResponse}
          onFailure={googleResponse}
          cookiePolicy={'single_host_origin'}
        />
        <Grid container>
          <Grid item xs>
            <Link className="auth-text-color" to="/forgot-password">
              {"Forgot password?"}
            </Link>
          </Grid>
          <Grid item>
            <Link className="auth-text-color" to="/signup">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        
      </div>
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {loadingMessage()}

      {signInForm()}

      {errorAlertDialog()}

      {performRedirect()}

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

// export default withRouter(SignIn);
export default SignIn;
