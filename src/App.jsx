import { useState } from 'react';
import { useCookies } from 'react-cookie';
import DiscordLogin from './components/DiscordLogin';

const App = () => {
  const [ cookies, setCookie, removeCookie ] = useCookies(['session-id']);

  return (
    <div className="App">
      <h1>Welcome to Graveyard Dashboard! Please login to use it.</h1>

      <DiscordLogin
        onLogin={sessionId => {
          // TODO: set options for this cookie (expiry time, etc.)
          // TODO: stop setting the cookie manually and use Set-Cookie instead
          //       on the backend
          setCookie('session-id', sessionId);
        }}
      />

      {cookies['session-id'] && <p>You logged in! Your session id is {cookies['session-id']}</p>}
    </div>
  );
}

export default App;
