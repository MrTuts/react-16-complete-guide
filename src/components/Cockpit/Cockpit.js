import React from 'react';

import classes from './Cockpit.css';

const Cockpit = props => {
  let btnClass = classes.Button;
  if (props.showPersons) {
    btnClass = [classes.Red, classes.Button].join(' ');
  }

  const pClasses = [];
  if (props.persons.length <= 2) {
    pClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    pClasses.push(classes.bold);
  }

  return (
    <React.Fragment>
      <h1>{props.appTitle}</h1>
      <p className={pClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={props.login}>Log in</button>
    </React.Fragment>
  );
};

export default Cockpit;
