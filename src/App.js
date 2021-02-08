import React, { Component } from 'react'
import './App.css';

import { UserCard, AddCard } from './views'
import { Button } from './components'


class App extends Component {

  state = {
    personalCards: [
      { id: 1, name: "Nikolay", age: 33},
      { id: 2, name: "Lora", age: 35},
      { id: 3, name: "Alek", age: 3},
    ],
    showCard: true
  };

///////////// METHOTS
  setName = (event, personIndex) => {
    const personalCards = [...this.state.personalCards];

    let card = personalCards.findIndex(personC => {
      return personC.id === personIndex;
    });

    personalCards[card].name = event.target.value;

    this.setState({
      personalCards: personalCards
    });
  };
  deleteCard = (index) => {
    let personalCards = [...this.state.personalCards];
    personalCards.splice(index,1);
    this.setState({ personalCards: personalCards });
  }
  toggleCrads = () => {
    this.setState({
      showCard: !this.state.showCard
    });
  };
  addPersonalCard = (resName, resAge) => {
    const personalCards = [...this.state.personalCards];
    let newCard = {
      id: personalCards.length+1,
      name: resName,
      age: parseInt(resAge)
    };
    personalCards.push(newCard);

    this.setState({personalCards: personalCards});

  }
///////////// METHOTS

  render() {

    let persons = null;

    if (this.state.showCard) {
      persons = (
        <div className="listContainer">
          {this.state.personalCards.map((person, index) => {
            return <UserCard 
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => {this.setName(event, person.id)}}
              deleteMe={() => {this.deleteCard(index)}}
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <Button bPos="abs" bEvent={this.toggleCrads} bText="Toggle Cards" />
        <AddCard 
          pName="Add Person Name" 
          pAge="Add Person Age"
          addPersonalCard={this.addPersonalCard}
          />
        {persons}
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div className="App">
//       <UserOutput name="Nikolay"/>
//       <UserInput />
//     </div>
//   );
// }

export default App;
