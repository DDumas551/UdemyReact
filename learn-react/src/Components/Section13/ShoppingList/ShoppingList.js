import React, { Component } from "react";
import SLForm from "./SLForm";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Milk", qty: "2 gallons" },
        { name: "Bread", qty: "3 loaves" },
      ],
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(item) {
    this.setState((st) => ({
      items: [...st.items, item],
    }));
  }
  renderItems() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li>
            {item.name}: {item.qty}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        <h1>Shopping List</h1>
        <div>{this.renderItems()}</div>
        <SLForm addItem={this.addItem} />
      </div>
    );
  }
}

export default ShoppingList;
