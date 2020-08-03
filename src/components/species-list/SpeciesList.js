import React from "react";
import "./SpeciesList.css";
import SpeciesItem from "../species-item/SpeciesItem";

const SpeciesList = () => {
  return (
    <ul className="species__list">
      <SpeciesItem />
      <SpeciesItem />
      <SpeciesItem />
      <SpeciesItem />
      <SpeciesItem />
      <SpeciesItem />
    </ul>
  );
};

export default SpeciesList;
