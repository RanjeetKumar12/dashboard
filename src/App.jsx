import { useCallback, useState } from 'react';
import CookieMessage from './components/CookieMessage/';
import DiscordLogin from './components/DiscordLogin';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  const [ loggedIn, setLoggedIn ] = useState(false);

  const onLoginCallback = useCallback(() => {
    setLoggedIn(true);
  }, []);

  return (
    <BrowserRouter>
    <div className="App">
      <Sidebar></Sidebar>
      {/* <h1>Welcome to Graveyard Dashboard!</h1>

      <CookieMessage />

      {!loggedIn && <DiscordLogin onLogin={onLoginCallback} />}

      {loggedIn && <Dashboard />} */}

    </div>
    </BrowserRouter>
  );
};

export default App;
