import React from "react";

const Pokemon = (props) => {
  return (
    <div className="card-wrapper">
      <div className="pokemon-wrapper">
        <div className="name">{props.pokemon.name}</div>
        <div className="pokedex-number">
          Pokedex # {props.pokemon.pokedex_number}
        </div>
        <img
          className="image"
          src={props.pokemon.image_url}
          alt="Pokemon Image"
        />
        <div className="description">{props.pokemon.description}</div>
      </div>
    </div>
  );
};

export default Pokemon;
