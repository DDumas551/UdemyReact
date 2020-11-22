import "./App.css";
import React, { Component } from "react";
import Pokecard from "./Components/Pokecard/Pokecard";
import Pokedex from "./Components/Pokedex/Pokedex";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Pokecard id={4} name="Charmander" type="fire" exp={62} /> */}
        <Pokedex />
      </div>
    );
  }
}

export default App;
