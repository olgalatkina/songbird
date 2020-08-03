import React from "react";
import "./App.css";
import axios from "axios";
import Header from "../header/Header";
import RandomBird from "../random-bird/RandomBird";
import Species from "../species/Species";
import ButtonNext from "../button-next/ButtonNext";

// const URL = 'http://localhost:3001/species';

function App() {
  // const getSpecies = () => {
  //   axios.get(URL).then((response) => {
  //     console.log(response);
  //   });
  // };

  return (
    <div className="app container">
      {/* <button onClick={getSpecies}>Get Species</button> */}
      <Header />
      <main className="main">
        <RandomBird />
        <Species />
        <ButtonNext />
      </main>
      <audio src="#" id="winSound"></audio>
      <audio src="#" id="errorSound"></audio>
    </div>
  );
}

export default App;
