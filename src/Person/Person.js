import React from 'react';
import './Person.css';

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        Hola {props.name}, tú tienes {props.age} anos
      </p>
      {props.children && <p>{props.children}</p>}
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default person;
