import React from 'react';
import './DiscordLogin.css';

const DiscordLogin = ({ onLogin }) => {
  return (
    <button
      className='loginButton'
      onClick={() => {
        const windowWidth = 500;
        const windowHeight = 800;

        const popupWindow = window.open(
          'https://discord.com/api/oauth2/authorize?client_id=986176431690252298&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fapi%2Fauth%2Fdiscord%2Fredirect&response_type=code&scope=identify%20guilds',
          'discordAuthorizationPopup',
          `height=${windowHeight}, width=${windowWidth},
           left=${window.screen.width ? (window.screen.width - windowWidth) / 2 : 0},
           top=${window.screen.height ? (window.screen.height - windowHeight) / 2 : 0},
           resizable=no, scrollbar=no, toolbar=no, menubar=no, location=no,
           directories=no, status=yes`
        );
      }}
    >
      Login
    </button>
  );
};

export default DiscordLogin;
