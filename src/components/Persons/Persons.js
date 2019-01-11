import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  render() {
    return this.props.persons.map(({ name, age, id }, index) => (
      //will only work in production build
      <Person
        position={index}
        name={name}
        age={age}
        click={() => this.props.clicked(index)}
        change={event => this.props.changed(event, id)}
      />
    ));
  }
}

export default Persons;
