import { useEffect } from 'react';
import './DiscordLogin.css';

const DiscordLogin = ({ onLogin }) => {
  const doDiscordLogin = sessionAccessToken => {
    // this fetch sets the session-id cookie
    fetch(
      `http://localhost:5000/api/auth/discord/getsessionid?sat=${sessionAccessToken}`,
      {method: 'GET', credentials: 'include'} // credentials required to receive cookie
    );

    // TODO: set as false if the login fails
    const success = true;

    if (success) {
      onLogin();
    } else {
      // TODO: display an error
    }
  };

  // TODO: fix missing dependency warning with doDiscordLogin
  useEffect(() => {
    // TODO: also check if the user is already logged into a session upon
    //       page load

    // check if the session access token is already given in the url when the
    // page loads
    const queryParameters = new URLSearchParams(window.location.search);

    const sessionAccessToken = queryParameters.get('sat');

    if (sessionAccessToken) {
      doDiscordLogin(sessionAccessToken);
    }
  }, []);

  return (
    <button
      className='loginButton'
      onClick={() => {
        // TODO: make it so clicking multiple times on login button doesn't create
        //       new event listeners

        const windowWidth = 500;
        const windowHeight = 800;

        window.open(
          'https://discord.com/api/oauth2/authorize?client_id=986176431690252298&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fapi%2Fauth%2Fdiscord%2Fredirect&response_type=code&scope=identify%20guilds',
          'discordAuthorizationPopup',
          `height=${windowHeight}, width=${windowWidth},
           left=${window.screen.width ? (window.screen.width - windowWidth) / 2 : 0},
           top=${window.screen.height ? (window.screen.height - windowHeight) / 2 : 0},
           resizable=no, scrollbar=no, toolbar=no, menubar=no, location=no,
           directories=no, status=yes`
        );

        // the callback below must be a named function not an arrow function
        window.addEventListener('message', function messageEventListener(event) {
          if (event.data.type === 'discordOAuthLoggedIn') {
            const sessionAccessToken = event.data.sessionAccessToken;

            doDiscordLogin(sessionAccessToken);

            this.removeEventListener('message', messageEventListener);
          }
        });
      }}
    >
      Login
    </button>
  );
};

export default DiscordLogin;
