import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'sdaaf3', name: 'Max', age: 28},
      { id: 'sbbs903', name: 'Manu', age: 29},
      { id: 'sbs3820', name: 'Stephanie', age: 26}
    ],
    showPersons: false
  };

  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28},
  //       { name: 'Manu', age: 29},
  //       { name: 'Stephanie', age: 26}
  //     ]
  //   });
  // };

  deletePersonHandler = (personIndex) => {
    // By using slice(), we create a copy of state.persons and return a new one - which is then stored in const persons
    // const persons = this.state.persons.slice();

    // The spread operator is an alternative/equivalent to the slice() method above (ES6 feature)
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  nameChangedHandler = (event, id) => {
    // findIndex method returns the index of the first element in the array that satisfies the provided testing function
    // => in this case p.id === id;
    const personIndex = this.state.persons.findIndex(p => {
      // returns true if p.id === id
      return p.id === id;
    });

    // create a copy of the selected person
    const person = {
      ...this.state.persons[personIndex]
    };
    // This is another way of making a copy of this person
    // const person = Object.assign({}, this.state.persons[personIndex]);

    // replace the selected person name with the input value
    person.name = event.target.value;

    // replace the person in persons with the updated values
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // set the new persons array to the updated state
    this.setState({ persons: persons });

    // this.setState({
    //   persons: [
    //     { name: 'Max', age: 28},
    //     //  Target is the text input field - value is the typed text
    //     { name: event.target.value, age: 29},
    //     { name: 'Stephanie', age: 26}
    //   ]
    // })
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    // The map function is a JS function that maps every function in a given area into something else
    // in this case a Person component
    if (this.state.showPersons) {
      persons = (
        <div>
          {/* index is passed in automatically by map function */}
          {this.state.persons.map((person, index) => {
            return <Person
                click={() =>this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event, id) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working</p>
          {/*Now this is a very convenient syntax but it can be inefficient, react can re-render
          certain things in your app too often so I don't necessarily recommend using this if
          you don't have to, use the bind syntax instead*/}
          <button
              style={style}
              onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {/* Ternary expression for rendering content conditionally */}
          {/*{*/}
            {/*this.state.showPersons ?*/}
              {/*<div>*/}
                {/*<Person*/}
                    {/*name={this.state.persons[0].name}*/}
                    {/*age={this.state.persons[0].age} />*/}
                {/*/!*Content between opening and closing component tags is accessed with props.children*!/*/}
                {/*<Person*/}
                    {/*name={this.state.persons[1].name}*/}
                    {/*age={this.state.persons[1].age}*/}
                    {/*click={this.switchNameHandler.bind(this, 'Maximillian!!!!')}*/}
                    {/*changed={this.nameChangedHandler}>My Hobbies: Racing</Person>*/}
                {/*<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />*/}
              {/*</div> : null*/}
          {/*}*/}
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
