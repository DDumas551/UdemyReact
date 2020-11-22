import React, { Component } from "react";
import "../Pokedex/Pokedex.css";
import Pokecard from "../Pokecard/Pokecard";
const pokemon = require("pokemon");

class Pokedex extends Component {
  render() {
    const allPokemon = pokemon.all();
    return (
      <div>
        {allPokemon.map((poke) => (
          <Pokecard
            name={poke}
            pokeNumber={pokemon.getId(poke)}
            id={pokemon.getId(poke)}
          />
        ))}
      </div>
    );
  }
}

export default Pokedex;
