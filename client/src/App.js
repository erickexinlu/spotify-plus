import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    const queryString = window.location.search;
    // this grabs everything after localhost:3000
    const urlParams = new URLSearchParams(queryString);
    const accessToken = urlParams.get('access_token');
    const refreshToken = urlParams.get('refresh_token');

    console.log(accessToken);
    console.log(refreshToken);

    if (refreshToken) {
      fetch(`http://localhost:8888/refresh_token?refresh_token=${refreshToken}`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://localhost:8888/login"
        >
          Log in to Spotify
        </a>
      </header>
    </div>
  );
}

export default App;
