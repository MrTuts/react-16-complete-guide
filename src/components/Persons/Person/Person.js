import React, { Component } from 'react';

import classes from './Person.css';

class person extends Component {
  render() {
    const props = this.props;
    return (
      <div className={classes.Person}>
        <p onClick={props.click}>
          Hola {props.name}, tú tienes {props.age} anos
        </p>
        {props.children && <p>{props.children}</p>}
        <input type="text" onChange={props.change} value={props.name} />
      </div>
    );
  }
}

export default person;
