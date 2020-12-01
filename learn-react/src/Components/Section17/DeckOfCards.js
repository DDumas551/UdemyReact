import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
const API_BASE = "https://deckofcardsapi.com/api/deck/";

class DeckOfCards extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, deckId: "", cards: [], remaining: 0 };
    this.getCard = this.getCard.bind(this);
  }
  async componentDidMount() {
    let deck = await axios.get(`${API_BASE}new/shuffle/?deck_count=1`);
    console.log(deck.data);
    this.setState({
      deck: deck.data,
      deckId: deck.data.deck_id,
      remaining: deck.data.remaining,
    });
  }
  async getCard() {
    let cardURL = `${API_BASE}${this.state.deckId}/draw/?count=1`;
    try {
      let nextCard = await axios.get(cardURL);
      if (!nextCard.data.success) {
        throw new Error("No cards remain");
      }
      let card = nextCard.data.cards[0];
      this.setState((st) => ({
        cards: [
          ...st.cards,
          {
            id: card.code,
            image: card.image,
            name: `${card.suit} of ${card.value}`,
          },
        ],
        remaining: st.remaining - 1,
      }));
    } catch (err) {
      alert(err);
    }
    console.log(this.state.remaining);
  }

  render() {
    const { remaining, cards } = this.state;
    return (
      <div>
        <h1>Card Dealer</h1>
        <button
          disabled={remaining === 0 ? "disabled" : ""}
          onClick={this.getCard}
        >
          Get Card
        </button>
        <div>
          {cards.map((c) => (
            <Card id={c.id} image={c.image} alt={c.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default DeckOfCards;
