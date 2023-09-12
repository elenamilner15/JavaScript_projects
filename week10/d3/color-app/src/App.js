import React from 'react';
import './App.css';
import Color from './Components/Color'; // Import the Color component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Color /> {/* Render the Color component */}
      </header>
    </div>
  );
}

export default App;