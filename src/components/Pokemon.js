import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const Pokemon = (props) => {
  return (
    <Flippy flipOnHover={false} flipDirection="horizontal">
      <FrontSide>
        <div className="card-wrapper">
          <div className="pokemon-wrapper">
            <div className="name">{props.pokemon.name}</div>
            <div className="pokedex-number">
              Pokedex # {props.pokemon.pokedex_number}
            </div>
            <img
              className="image"
              src={props.pokemon.image_url}
              alt="Pokemon"
            />
            <div className="description">{props.pokemon.description}</div>
          </div>
        </div>
      </FrontSide>
      <BackSide>
        <div className="back-card-wrapper">
          <div className="back-pokemon-wrapper">
            <div className="type">
              Typing: {props.pokemon.type_one} <br /> {props.pokemon.type_two}
            </div>
            <div className="ability">Ability: {props.pokemon.ability}</div>
            <div className="weakness">
              Weakness: {props.pokemon.weakness_one} <br />{" "}
              {props.pokemon.weakness_two}
            </div>
          </div>
        </div>
      </BackSide>
    </Flippy>
  );
};

export default Pokemon;
