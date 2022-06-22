import { useCallback, useState } from 'react';
import CookieMessage from './components/CookieMessage/';
import DiscordLogin from './components/DiscordLogin';
import Dashboard from './components/Dashboard';

const App = () => {
  const [ loggedIn, setLoggedIn ] = useState(false);

  const onLoginCallback = useCallback(() => {
    setLoggedIn(true);
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Graveyard Dashboard!</h1>

      <CookieMessage />

      {!loggedIn && <DiscordLogin onLogin={onLoginCallback} />}

      {loggedIn && <Dashboard />}

    </div>
  );
};

export default App;
