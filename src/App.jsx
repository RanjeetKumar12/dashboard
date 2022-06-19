import { useCallback, useState } from 'react';
import DiscordLogin from './components/DiscordLogin';
import DashboardWrapper from './components/DashboardWrapper';

const App = () => {
  const [ loggedIn, setLoggedIn ] = useState(false);

  const onLoginCallback = useCallback(() => {
    setLoggedIn(true);
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Graveyard Dashboard!</h1>

      {!loggedIn && <DiscordLogin onLogin={onLoginCallback} />}

      {loggedIn && <DashboardWrapper />}
    </div>
  );
};

export default App;
