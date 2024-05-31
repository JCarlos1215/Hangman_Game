import React from "react";
import feliz from "../img/feliz.png";

export default function Welcome(){
    return(
        <>
        <div className="wrapper">
            <h1>Welcome To Hangman Game</h1>
            <h2>Clasical Game</h2>
            <img src={feliz} alt="feliz image.."width={200} />
        </div>
        </>

    );
}