import React, { Component } from 'react';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';

class Person extends Component {
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <p onClick={props.click}>
          Hola {props.name}, tú tienes {props.age} anos
        </p>
        {props.children && <p>{props.children}</p>}
        <input type="text" onChange={props.change} value={props.name} />
      </React.Fragment>
    );
  }
}

export default withClass(Person, classes.Person);
