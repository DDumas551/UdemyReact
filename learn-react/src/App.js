import "./App.css";
import React, { Component } from "react";
import Pokedex from "./Components/Pokedex/Pokedex";
import "./Components/Pokedex/Pokedex.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="pokedex">
          <Pokedex />
        </div>
      </div>
    );
  }
}

export default App;
