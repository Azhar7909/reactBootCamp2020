import React from 'react';
import './App.css';
import Dinner from './Dinner';

function App() {
  return (
    <div className="App">
      <h1>
        Lasani restorent.
      </h1>
      <Dinner dish="Checken karahi" sweet="Kheer"/>
      <Dinner dish="Checken Baryani" sweet="Sohan Halwa"/>
      <Dinner dish="Checken Daleem" sweet="rice"/>
    </div>
  );
}

export default App;
