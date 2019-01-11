import React, { Component } from 'react';

import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

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
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = this.state.persons.map(({ name, age, id }, index) => (
        //will only work in production build
        <ErrorBoundary key={id}>
          <Person
            name={name}
            age={age}
            click={() => this.deletePersonHandler(index)}
            change={event => this.nameChangedHandler(event, id)}
          />
        </ErrorBoundary>
      ));

      btnClass = classes.Red;
    }

    const pClasses = [];
    if (this.state.persons.length <= 2) {
      pClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      pClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm React App</h1>
        <p className={pClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
