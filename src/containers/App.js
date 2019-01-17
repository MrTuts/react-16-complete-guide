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
    this.loginHandler = this.loginHandler.bind(this);
    this.state = {
      persons: [
        { id: 'sda', name: 'Max', age: 20 },
        { id: 'ffe', name: 'George', age: 25 },
        { id: 'rra', name: 'Paul', age: 17 },
      ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false,
    };
  }

  loginHandler() {
    this.setState({ authenticated: true });
  }

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
    /* 
      we use function in setState to make sure the prevState
      is not mutated by some other setState call, because setState is async
    */
    this.setState((prevState, props) => ({
      showPersons: !prevState.showPersons,
      toggleClicked: prevState.toggleClicked + 1,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <Cockpit
          appTitle={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
          login={this.loginHandler}
        />
        {this.state.showPersons && (
          <Persons
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            persons={this.state.persons}
            isAuthenticated={this.state.authenticated}
          />
        )}
      </React.Fragment>
    );
  }
}

export default withClass(App, classes.App);
