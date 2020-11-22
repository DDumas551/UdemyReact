import React, { Component } from "react";
import "../Pokedex/Pokedex.css";
const pokemon = require("pokemon");

const Poke_API =
  "http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokedex extends Component {
  render() {
    const allPokemon = pokemon.all();
    return (
      <div>
        {allPokemon.map((poke) => (
          <div>
            <h1>{poke}</h1>
            <h1>{pokemon.getId(poke)}</h1>
            <img
              className="randompokemon"
              src={`${Poke_API}${pokemon.getId(poke)}.png`}
            ></img>
          </div>
        ))}
      </div>
    );
  }
}

export default Pokedex;
