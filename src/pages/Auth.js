// src/AuthContainer.js
import React, { useState } from 'react';
import Login from './Login'
import Registration from "./Register"
import { Button } from '@mui/material';

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button variant="contained"  onClick={handleLoginClick}>
          Login
        </Button>
        <Button variant="contained" onClick={handleRegisterClick}>
          Register
        </Button>
      </div>
      {showLogin ? <Login /> : <Registration />}
    </div>
  );
};

export default Auth;
