import { useState } from 'react';
// TODO: remove 'react-cookie' dependency
//import { useCookies } from 'react-cookie';
import DiscordLogin from './components/DiscordLogin';

const App = () => {
  const [ loggedIn, setLoggedIn ] = useState(false);

  return (
    <div className="App">
      <h1>Welcome to Graveyard Dashboard! Please login to use it.</h1>

      <DiscordLogin
        onLogin={() => {
          setLoggedIn(true);
        }}
      />

      {loggedIn && <p>You are logged in!</p>}
    </div>
  );
}

export default App;
