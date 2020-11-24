import "./App.css";
import React, { Component } from "react";
import Pokedex from "./Components/Pokedex/Pokedex";
import Game from "./Components/Game/Game";
import "./Components/Pokedex/Pokedex.css";
import Rando from "./Components/Game/Rando";
import OnClickPractice from "./Components/Game/OnClickPractice";
import RollDice from "./Components/Game/Dice/RollDice";
import ScoreKeeper from "./Components/ReactStatePatterns/ScoreKeeper";
import MutableDataStructures from "./Components/ReactStatePatterns/MutatingStateTheSafeWay/MutableDataStructures";
import "../src/font-awesome-4.7.0/css/font-awesome.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          {/* <Pokedex /> */}
          {/* <Game /> */}
          {/* <Rando maxNum={500} /> */}
          {/* <OnClickPractice /> */}
        </div>
        <div className="rollDice-container">{/* <RollDice /> */}</div>
        {/* <ScoreKeeper /> */}
        {/* <MutableDataStructures /> */}
      </div>
    );
  }
}

export default App;
