import React, { Component } from "react";
import uuid from "uuid/v4";
import SLForm from "./SLForm";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Milk", qty: "2 gallons", id: uuid() },
        { name: "Bread", qty: "3 loaves", id: uuid() },
      ],
    };
    this.addItem = this.addItem.bind(this);
  }
    addItem(item) {
      let newItem = {...item, id: uuid()}
    this.setState((st) => ({
      items: [...st.items, newItem],
    }));
  }
  renderItems() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li key={item.id}>
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
