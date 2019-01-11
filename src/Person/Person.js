import React from 'react';

import classes from './Person.css';

const person = props => {
  if (Math.random() > 0.7) {
    throw new Error('Something went wrong');
  }

  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        Hola {props.name}, tú tienes {props.age} anos
      </p>
      {props.children && <p>{props.children}</p>}
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default person;
