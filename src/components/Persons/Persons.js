import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
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
        key={name}
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
