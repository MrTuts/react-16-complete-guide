import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props);

    this.deletePersonHandler = this.deletePersonHandler.bind(this);
    this.nameChangedHandler = this.nameChangedHandler.bind(this);
    this.togglePersonsHandler = this.togglePersonsHandler.bind(this);
  }

  state = {
    persons: [
      { id: 'sda', name: 'Max', age: 20 },
      { id: 'ffe', name: 'George', age: 25 },
      { id: 'rra', name: 'Paul', age: 17 },
    ],
    showPersons: false,
  };

  deletePersonHandler(index) {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  }

  nameChangedHandler(event, id) {
    const personIndex = this.state.persons.findIndex(
      person => person.id === id,
    );
    if (personIndex === -1) {
      return;
    }
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons,
    });
  }

  togglePersonsHandler() {
    this.setState({ showPersons: !this.state.showPersons });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = this.state.persons.map(({ name, age, id }, index) => (
        <Person
          key={id}
          name={name}
          age={age}
          click={() => this.deletePersonHandler(index)}
          change={event => this.nameChangedHandler(event, id)}
        />
      ));

      style.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
