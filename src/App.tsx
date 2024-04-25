import React, { useState, useEffect } from 'react';
import './App.css';
import Hangman from "./components/Hangman";
import Welcome from "./components/Welcome";

const words = ['Carro', 'Platano', 'Alien', 'Raton', 'Arbol', 'moto', 'kiwi'];

function App() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Incrementa los segundos
      setSeconds(prevSeconds => {
        if (prevSeconds === 59) {
          // Si los segundos llegan a 59, reinicia los segundos y aumenta los minutos
          setMinutes(prevMinutes => prevMinutes + 1);
          return 0;
        } else {
          return prevSeconds + 1;
        }
      });
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []); // El array vacío asegura que el efecto solo se ejecute una vez al montar el componente

  return (
    <div className="App">
      
      <Welcome />
      <Hangman words={words} />
      <br></br>
      <div>
        Tiempo transcurrido: {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
      </div>
    </div>
    
  );
}

export default App;
