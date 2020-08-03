import React from "react";
import "./App.css";
import axios from "axios";

// const URL = 'http://localhost:3001/species';

function App() {
  const getSpecies = () => {
    axios.get(URL).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="app">
      <button onClick={getSpecies}>Get Species</button>
    </div>
  );
}

export default App;
