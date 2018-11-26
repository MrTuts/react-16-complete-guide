import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props);

    this.switchNameHandler = this.switchNameHandler.bind(this);
    this.nameChangedHandler = this.nameChangedHandler.bind(this);
  }

  state = {
    persons: [
      { name: 'Max', age: 20 },
      { name: 'George', age: 25 },
      { name: 'Paul', age: 17 },
    ],
  };

  switchNameHandler() {
    this.setState({
      persons: [
        { name: 'Paul', age: 17 },
        { name: 'George', age: 25 },
        { name: 'Max', age: 20 },
      ],
    });
  }

  nameChangedHandler(event, index) {
    const newPersons = [...this.state.persons];
    newPersons[index].name = event.target.value;
    this.setState({
      persons: newPersons,
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.switchNameHandler}>
          Switch Name
        </button>
        {this.state.persons.map(({ name, age }, index) => (
          <Person
            key={index}
            name={name}
            age={age}
            click={this.switchNameHandler}
            change={event => this.nameChangedHandler(event, index)}
          />
        ))}
      </div>
    );
  }
}

export default App;
