import { useCallback, useState } from 'react';
import DiscordLogin from './components/DiscordLogin';
import DashboardWrapper from './components/DashboardWrapper';

const App = () => {
  const [ loggedIn, setLoggedIn ] = useState(false);

  return (
    <div className="App">
      <h1>Welcome to Graveyard Dashboard! Please login to use it.</h1>

      <DiscordLogin
        onLogin={useCallback(() => {
          setLoggedIn(true);
        }, [])}
      />

      {loggedIn && <DashboardWrapper />}
    </div>
  );
};

export default App;
