import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { loginFailure, loginSuccess } from '../store/action/authActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/users/signin', {
        email,
        password,
      });
      console.log(response.data.message);
      if (response.data.message === 'Please verify your account') {
        setError('Please activate your account, check your email');
        return;
      }
      if (response.data.message !== 'Login successful') {
        throw new Error('Wrong Credentials');
      }
      dispatch(loginSuccess(response.data.token));
      history.push('/products');
    } catch (error) {
      console.error('Login error:', error);
      dispatch(loginFailure(error.message));
      setError('Wrong credentials, please try again');
    }
  };

  return (
    <Grid container justifyContent="center" style={{ marginTop: '50px', height: "100vh" }}>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            margin="normal"
            required
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
            Login
          </Button>
        </form>
        <div style={{ marginTop: '20px', textAlign: 'center', color: 'black' }}>
          <Typography variant="body1">
            Don't have an account? <Link to="/register">Register here</Link>
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
