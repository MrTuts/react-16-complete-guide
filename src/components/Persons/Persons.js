import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);

    this.lastPersonRef = React.createRef();
  }

  componentDidMount() {
    this.lastPersonRef.current.focusInput();
  }

  render() {
    return this.props.persons.map(({ name, age, id }, index) => (
      <Person
        ref={this.lastPersonRef}
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
