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
import LotteryHome from "./Components/ReactStatePatterns/Lotto/LotteryHome";
import CoinFlip from "./Components/ReactStatePatterns/StateExercises/CoinFlip";
import ColorBoxes from "./Components/ReactStatePatterns/StateExercises/ColorBoxes";
import BindingWithArgs from "./Components/Section10/BindingWithArgs";
import NumberList from "./Components/Section10/NumberList";
import BetterNumberList from "./Components/Section10/BetterNumberList";
import Form from "./Components/Section13/Form";
import ShoppingList from "./Components/Section13/ShoppingList/ShoppingList";
import ColorBoxesList from "./Components/Section14/ColorBoxes";
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
        {/* <LotteryHome /> */}
        {/* <LotteryHome title="Mini Daily" maxNum={10} maxBalls={4} /> */}
        {/* <CoinFlip /> */}
        {/* <ColorBoxes /> */}
        {/* <BindingWithArgs /> */}
        {/* <NumberList /> */}
        {/* <hr /> */}
        {/* <BetterNumberList/> */}
        {/* <Form /> */}
        {/* <ShoppingList /> */}
        <ColorBoxesList />
      </div>
    );
  }
}

export default App;
