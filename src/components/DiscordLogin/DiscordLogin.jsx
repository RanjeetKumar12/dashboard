import { useCallback, useEffect, useState } from 'react';
import styles from './DiscordLogin.module.css';

const DiscordLogin = ({ onLogin }) => {
  const [ loginError, setLoginError ] = useState(false);

  const doDiscordLogin = useCallback(async sessionAccessToken => {
    // this fetch sets the session-id cookie
    const response = await fetch(
      `http://localhost:5000/api/auth/discord/getsessionid?sat=${sessionAccessToken}`,
      {method: 'GET', credentials: 'include'} // credentials required to receive cookie
    );

    let success = true;

    // TODO: do something if the server is down?
    if (!response.ok) {
      success = false;
    }

    if (success) {
      onLogin();
    } else {
      setLoginError(true);
    }
  }, [onLogin]);

  useEffect(() => {
    // TODO: decide whether session-id cookie or url session access token
    //       should be prioritized (session-id is prioritized right now)

    // this function is made and called right away so that it can be async
    (async () => {
      // check if the session-id cookie is already valid (user is logged in)
      const response = await fetch(
        'http://localhost:5000/api/auth/discord/isloggedin',
        {method: 'GET', credentials: 'include'}
      );

      const responseText = await response.text();

      if (responseText === 'true') {
        onLogin();
        return;
      }

      // check if the session access token is already given in the url when the
      // page loads
      const queryParameters = new URLSearchParams(window.location.search);

      const sessionAccessToken = queryParameters.get('sat');

      if (sessionAccessToken) {
        doDiscordLogin(sessionAccessToken);
      }
    })();
  }, [doDiscordLogin, onLogin]);

  useEffect(() => {
    // event listener for messages from login popup window

    // the callback below must be a named function not an arrow function

    const messageEventListener = event => {
      if (event.data.type === 'discordOAuthLoggedIn') {
        const sessionAccessToken = event.data.sessionAccessToken;

        doDiscordLogin(sessionAccessToken);
      }
    };

    window.addEventListener('message', messageEventListener);

    return () => {
      // clean up when component unmounts
      window.removeEventListener('message', messageEventListener);
    };
  }, [doDiscordLogin]);

  return (
    <div>
      <button
        className={styles.loginButton}
        onClick={() => {
          setLoginError(false); // remove any error message

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
        }}
      >
        Login
      </button>
      
      {loginError && <p>Login failed, please try again</p>}
    </div>
  );
};

export default DiscordLogin;
