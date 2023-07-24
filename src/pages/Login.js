import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container maxWidth="xs">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
