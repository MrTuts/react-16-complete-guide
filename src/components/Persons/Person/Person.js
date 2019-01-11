import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';

class Person extends Component {
  constructor(props) {
    super(props);

    this.inputElement = null;
  }

  componentDidMount() {
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  render() {
    const props = this.props;
    return (
      <React.Fragment key={props.name}>
        <p onClick={props.click}>
          Hola {props.name}, tú tienes {props.age} anos
        </p>
        {props.children && <p>{props.children}</p>}
        <input
          ref={inp => {
            this.inputElement = inp;
          }}
          type="text"
          onChange={props.change}
          value={props.name}
        />
      </React.Fragment>
    );
  }
}

Person.PropTypes = {
  click: PropTypes.func,
  change: PropTypes.func,
  name: PropTypes.string,
  position: PropTypes.number,
  age: PropTypes.number,
};

export default withClass(Person, classes.Person);
