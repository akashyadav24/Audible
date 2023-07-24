// src/Registration.js
import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration submission logic here
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Number:', number);
    console.log('Password:', password);
  };

  return (
    <Container maxWidth="xs">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
        <Typography variant="h4" gutterBottom>
          Registration
        </Typography>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <TextField
            label="First Name"
            variant="outlined"
            margin="normal"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            margin="normal"
            value={lastName}
            onChange={handleLastNameChange}
          />
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            type="tel"
            label="Number"
            variant="outlined"
            margin="normal"
            value={number}
            onChange={handleNumberChange}
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
            Register
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Registration;
