import { useCallback, useEffect, useState } from 'react';
import styles from './DiscordLogin.module.css';

const DiscordLogin = ({ onLogin }) => {
  const [ loginError, setLoginError ] = useState(false);

  const doDiscordLogin = useCallback(async sessionAccessToken => {
    // this fetch sets the session-id cookie
    const response = await fetch(
      `${process.env.REACT_APP_DASHBOARD_API}/api/auth/discord/getsessionid?sat=${sessionAccessToken}`,
      {method: 'GET', credentials: 'include'} // credentials required to receive cookie
    );

    let success = true;

    // TODO: do something if the server is down?
    if (!response.ok) {
      success = false;
    }

    return success;
  }, []);

  useEffect(() => {
    // this function is made and called right away so that it can be async
    (async () => {
      // First, check if the session access token is given in the URL
      // (this happens when the user opened the discord oauth url themselves)
      const queryParameters = new URLSearchParams(window.location.search);

      const sessionAccessToken = queryParameters.get('sat');

      // whether it should bother checking if the user is already logged in
      let doSessionIdCheck = true;

      if (sessionAccessToken) {
        const success = await doDiscordLogin(sessionAccessToken);
        
        if (success) {
          setLoginError(false);
          onLogin();

          // since a new session was created, no need to check the session id
          doSessionIdCheck = false; 
        } else {
          setLoginError(true);
        }
      }

      if (!doSessionIdCheck) return;

      // Otherwise, check if the session-id cookie is already valid (user is
      // logged in)
      const response = await fetch(
        `${process.env.REACT_APP_DASHBOARD_API}/api/auth/discord/isloggedin`,
        {method: 'GET', credentials: 'include'}
      );

      // response.text() is either 'true' or 'false', depending on if the
      // session-id is valid
      const isLoggedIn = JSON.parse(await response.text());

      if (isLoggedIn) {
        setLoginError(false);
        onLogin();
      }
    })();
  }, [doDiscordLogin, onLogin]);

  useEffect(() => {
    // event listener for messages from login popup window

    const messageEventListener = async event => {
      if (event.data.type === 'discordOAuthLoggedIn') {
        const sessionAccessToken = event.data.sessionAccessToken;

        const success = await doDiscordLogin(sessionAccessToken);

        if (success) {
          setLoginError(false);
          onLogin();
        } else {
          setLoginError(true);
        }
      }
    };

    window.addEventListener('message', messageEventListener);

    return () => {
      // clean up when component unmounts
      window.removeEventListener('message', messageEventListener);
    };
  }, [doDiscordLogin, onLogin]);

  return (
    <div>
      <button
        className={styles.loginButton}
        onClick={() => {
          setLoginError(false); // remove any error message

          const windowWidth = 500;
          const windowHeight = 800;

          // NOTE: make sure the redirect is set up in the discord application
          const parameters = new URLSearchParams({
            client_id: process.env.REACT_APP_CLIENT_ID,
            redirect_uri: (
              `${process.env.REACT_APP_DASHBOARD_API}/api/auth/discord/redirect`
            ),
            response_type: 'code',
            scope: 'identify guilds',
          });

          window.open(
            `https://discord.com/api/oauth2/authorize?${parameters}`,
            'discordAuthorizationPopup',
            `height=${windowHeight}, width=${windowWidth},
             left=${
                     window.screen.width
                       ? (window.screen.width - windowWidth) / 2 : 0
                   },
             top=${
                    window.screen.height
                      ? (window.screen.height - windowHeight) / 2 : 0
                  },
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
