import React, { useState } from 'react';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const toggleBackgroundColor = () => {
    const newColor = backgroundColor === 'white' ? 'lightblue' : 'white';
    setBackgroundColor(newColor);
  };


  return (
    <div className="App" style={{ backgroundColor }}>
      <header className="App-header">
        <h1>Toggle Background Color</h1>
        <button onClick={toggleBackgroundColor}>Click me!</button>
        
      </header>
      
    </div>
  );
}

export default App;
