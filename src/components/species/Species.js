import React from "react";
import "./Species.css";
import SpeciesList from "../species-list/SpeciesList";
import SpeciesInstructions from "../species-instructions/SpeciesInstructions";
import Card from "../card/Card";

const Species = () => {
  return (
    <section className="species">
      <SpeciesList />
      <div className="species__info">
        <SpeciesInstructions />
        <Card />
      </div>
    </section>
  );
};

export default Species;
