import React, { Component } from "react";
import "./Pokecard.css";

const Poke_API =
  "http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokecard extends Component {
  render() {
    let imgSrc = `${Poke_API}${this.props.id}.png`;
    const { name, type, exp, pokeNumber } = this.props;
    return (
      <div className="Pokecard">
        <span>
          <h1>{name}</h1>
          <h1>{pokeNumber}</h1>
          <img src={imgSrc} className="randompokemon" alt={name} />
        </span>
      </div>
    );
  }
}

export default Pokecard;
