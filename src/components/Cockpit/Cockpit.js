import React from 'react';

import classes from './Cockpit.css';

const Cockpit = props => {
  let btnClass = props.showPersons ? classes.Red : '';

  const pClasses = [];
  if (props.persons.length <= 2) {
    pClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    pClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm React App</h1>
      <p className={pClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
