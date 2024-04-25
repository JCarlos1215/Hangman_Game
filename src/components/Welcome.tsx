import hangman from "../img/hangman.png";
import imloop from "../img/imloop.gif";
// import "../css/main.css";

export default function Welcome() {
  return (
    <>
      <div className="wrapper">
        <h1>Bienvenido al Juego del Ahorcado</h1>
        <p></p>
        <img src={hangman} alt="Sammy Image" width={200} height={200} />
      </div>
    </>
  );
}