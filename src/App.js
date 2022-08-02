import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getAll } from './service/provider';

function App() {
  useEffect(() => {
    async function fetch() {
      const res = await getAll({ type: 'boolean', difficulty: 'hard', amount: 10 });

      console.log(res);
    }
    fetch();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
