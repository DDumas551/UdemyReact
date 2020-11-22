import React, { Component } from "react";
import "./Pokecard.css";
const Poke_API =
  "http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokecard extends Component {
  render() {
    let imgSrc = `${Poke_API}${this.props.id}.png`;
    const { name, type, exp } = this.props;
    return (
      <div className="Pokecard">
        <h1>{name}</h1>
        <img src={imgSrc} alt="charmander" />
        <div>Type: {type}</div>
        <div>EXP: {exp}</div>
      </div>
    );
  }
}

export default Pokecard;
