import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import card from "./card.json";
import './App.css';


class App extends Component {
  // Setting this.state.card to the cards json array
  state = {
    card,
    count: 0
  };


  handleIncrement = id => {
       // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };



  // Map over this.state.card and render a Card component for each card object
  render() {
    return (
      <Wrapper>
        <Title>Starwars</Title>
        {this.state.card.map(card => (
          <Card
            removeCard={this.removeCard}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            occupation={card.occupation}
            location={card.location}
          />
        ))}
      </Wrapper>
    );
  }
} 



export default App;
