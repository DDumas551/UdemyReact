import "./App.css";
import { Route, Link, Switch, NavLink } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Chocolate from "./Chocolate";
import Chips from "./Chips";
import NavBar from "./NavBar";
import Dog from "./Dog";
import Cat from "./Cat";

function App() {
  return (
    <div className="App">
      <h1>Vending Machine!!</h1>
      <NavBar />

      <Switch>
        <Route exact path="/" render={() => <VendingMachine />} />
        <Route exact path="/soda" render={() => <Soda />} />
        <Route exact path="/chocolate" render={() => <Chocolate />} />
        <Route exact path="/chips" render={() => <Chips />} />
      </Switch>
    </div>
  );
}

export default App;
