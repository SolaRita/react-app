import React from "react";
import Cards from "./cards";
import { Component } from "react";
import data from "../assets/data/cards.json";
import Navbar from "./navbar";

class Home extends Component {
  state = {
    cards: data,
  };

  render() {
    return (
      <div>
        <Navbar />
        <h1 className="txt-title">Reactgram</h1>
        <Cards data={this.state.cards} />
      </div>
    );
  }
}

export default Home;
