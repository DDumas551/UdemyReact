import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import "./App.css";

class App extends Component {
  render() {
    // console.log(generatePalette(seedColors[4]));
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Hey</h1>} />
        <Route exact path="palette/:id" />
        {/* <div className="App">
          <Palette palette={generatePalette(seedColors[4])} />
        </div> */}
      </Switch>
    );
  }
}

export default App;
