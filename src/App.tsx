import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map/Map'
import Countries from "./components/Countries/Countries";

function App() {
  return (
    <div className="App">
        <Countries/>
        <Map/>
    </div>
  );
}

export default App;
