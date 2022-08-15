import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const RenderPokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = () => {
    fetch("http://127.0.0.1:5000/pokemon/get")
      .then((response) => response.json())
      .then((response) => setPokemon(response));
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const showPokemon = () => {
    return pokemon.map((pokemon) => {
      return (
        <div>
          <Pokemon pokemon={pokemon} />
        </div>
      );
    });
  };

  return (
    <div className="page-wrapper">
      <h1 className="title"> My Pokemon</h1>
      <Carousel infiniteLoop useKeyboardArrows autoPlay={false}>
        {showPokemon()}
      </Carousel>
    </div>
  );
};

export default RenderPokemon;
