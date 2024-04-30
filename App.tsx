import React, { useState, useEffect } from 'react';
import './App.css';
import Hangman from "./components/Hangman";
import Welcome from "./components/Welcome";

const words = ['Carro', 'Platano', 'Alien', 'Raton', 'Arbol', 'moto', 'kiwi'];

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Incrementa los segundos
      setSeconds(prevSeconds => {
        if (prevSeconds === 59) {
          // Si los segundos llegan a 59, reinicia los segundos y aumenta los minutos
          setMinutes(prevMinutes => {
            if (prevMinutes === 59) {
              // Si los minutos llegan a 59, reinicia los minutos y aumenta las horas
              setHours(prevHours => prevHours + 1);
              return 0;
            } else {
              return prevMinutes + 1;
            }
          });
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
      <br></br>
      <Welcome />
      <Hangman words={words} />
      <div>
      <br></br>
        <p style={{fontSize: 30, fontFamily: 'fantasy',}}> Tiempo transcurrido: {hours < 10? '0' + hours : hours}:{minutes < 10? '0' + minutes : minutes}:{seconds < 10? '0' + seconds : seconds}
        </p> 
      </div>
    </div>
    
  );
}

export default App;