import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';

const RegistrationForm = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userName || !email || !password || !street || !city || !state) {
      setError('Please fill in all fields.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/users', {
        userName,
        email,
        password,
        address: [
          {
            street,
            city,
            state,
          },
        ],
      });
      if (response.data.message === 'added') {
        console.log('Registration successful:', response.data.user);
        setSuccess('Registration successful. Redirecting to login...');
        history.push('/login');
      } else {
        setError('Registration failed. Please try again later.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('Registration failed. Please try again later.');
    }
  };

  return (
    <div className="container w-50 my-5">
      <Typography variant="h1" className="text-success" gutterBottom>
        Register
      </Typography>
      {success && <Typography style={{ color: 'green' }}>{success}</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Street"
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="City"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="State"
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        {error && <Typography style={{ color: 'red' }}>{error}</Typography>}
        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
