import DiscordLogin from './components/DiscordLogin';

const App = () => {
  

  return (
    <div className="App">
      <h1>Welcome to Graveyard Dashboard! Please login to use it.</h1>

      <DiscordLogin onLogin={() => {
        alert('Hey! Logins don\'t work yet, but at least you tried!');
      }}/>
    </div>
  );
}

export default App;
