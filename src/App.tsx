import React from 'react';
import Hangman from "./components/Hangman";
import Welcome from "./components/Welcome";

const words = ['carro', 'banana', 'pelota', 'date', 'paloma', 'pajaro', 'kiwi'];

function App() {
  return (
    <div className="App">
      <Welcome />
      <Hangman words={words} />
    </div>
  );
}

export default App;