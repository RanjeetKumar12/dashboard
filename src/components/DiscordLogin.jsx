import React from 'react';
import './DiscordLogin.css';

const DiscordLogin = ({ onLogin }) => {
  return (
    <button className='loginButton' onClick={onLogin}>Login</button>
  );
};

export default DiscordLogin;
