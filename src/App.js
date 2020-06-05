import React from 'react';
import logo from './logo.svg';
import map from './map.jpg';
import './App.css';

// comment
//        <img src={logo} className="App-logo" alt="logo" />

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Her kommer en dag en Civilisation Game Master App
        </p>
        <img src={map} className="civmap" alt="map" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
