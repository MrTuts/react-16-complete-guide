import React from 'react';
import Person from './Person/Person';

const Persons = props =>
  props.persons.map(({ name, age, id }, index) => (
    //will only work in production build
    <Person
      name={name}
      age={age}
      click={() => props.clicked(index)}
      change={event => props.changed(event, id)}
    />
  ));

export default Persons;
