import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import card from "./card.json";
import './App.css';


class App extends Component {
  // Setting this.state.card to the cards json array
  state = {
    card
  };
// card score
score=0;
maxScore=0;
// ES6 click, resetgame, shuffle & render
Click = id => {    
   const card = this.state.card.map(card => {
     if (card.id===id){
       if(card.click===false){  //card clicked
         card.click=true;
         this.score++;
         if(this.score>this.maxScore){
           this.maxScore=this.score;
         }
       } else {//update score for card clicked again
         this.resetGame();
       }
     }
     return card;
   });
   // Set this.state.card equal to the new card array
   this.setState({ card });
 };

 resetGame = () =>{//reset game 
   this.score = 0;
   const card = this.state.card.map(card =>{
     card.click=false;
     return card;
   })
 }
// react-shuffle package based on the cards array
 shuffle = (array)=> {
   var currentIndex = array.length, temporaryValue, randomIndex;


   while (0 !== currentIndex) {
  // Math random to shuffle cards
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex -= 1;

     // Exchange with the current card.
     temporaryValue = array[currentIndex];
     array[currentIndex] = array[randomIndex];
     array[randomIndex] = temporaryValue;
   }

   return array;
 }

 // Map over this.state.card and render a Card component for each card object
 render() {
   return (
     <div>
     <Title>Starwars | Current Game Score: {this.score} | Max Score: {this.maxScore}</Title>
     <Wrapper>
       {this.shuffle(this.state.card).map(card => (
         <Card
           Click={this.Click}
           id={card.id}
           key={card.id}
           name={card.name}
           image={card.image}
           occupation={card.occupation}
           location={card.location}
          />
       ))}
     </Wrapper>
     </div>
   );
 }
}

export default App;









