import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';

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
    return (
      <React.Fragment>
        <Cockpit
          appTitle={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {this.state.showPersons && (
          <Persons
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            persons={this.state.persons}
          />
        )}
      </React.Fragment>
    );
  }
}

export default withClass(App, classes.App);
