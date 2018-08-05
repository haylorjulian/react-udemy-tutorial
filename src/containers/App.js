import React, { PureComponent } from 'react';
import classes from './App.css';
// import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import Aux from '../hoc/Aux';
import WithClass from '../hoc/WithClass';
import AlternativeWithClass from '../hoc/AlternativeWithClass'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor', props);
    this.state = {
      persons: [
        { id: 'sdaaf3', name: 'Max', age: 28},
        { id: 'sbbs903', name: 'Manu', age: 29},
        { id: 'sbs3820', name: 'Stephanie', age: 26}
      ],
      showPersons: false,
      toggleClicked: 0
    };
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Update App.js] inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //       nextState.showPersons !== this.state.showPersons;
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Update App.js] inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[Update App.js] inside componentDidUpdate()');
  }

  // New React syntax for declaring the state object
  // state = {
  //   persons: [
  //     { id: 'sdaaf3', name: 'Max', age: 28},
  //     { id: 'sbbs903', name: 'Manu', age: 29},
  //     { id: 'sbs3820', name: 'Stephanie', age: 26}
  //   ],
  //   showPersons: false
  // };

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
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  };

  render() {
    console.log('[App.js] inside render()');
    // const style = {
    //   backgroundColor: 'green',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    // };

    let persons = null;

    // The map function is a JS function that maps every function in a given area into something else
    // in this case a Person component
    if (this.state.showPersons) {
      persons = <Persons
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler} />
    }

    return (
      // <StyleRoot>
        // <WithClass classes={classes.App}>
        <Aux>
          <button onClick={() => {this.setState({showPersons: true})}}>Show Person</button>
          <Cockpit
              appTitle={this.props.title}
              persons={this.state.persons}
              showPersons={this.state.showPersons}
              clicked={this.togglePersonsHandler}/>
          {persons}
        </Aux>
        // </WithClass>
      // </StyleRoot>
    );
  }
}

export default AlternativeWithClass(App, classes.App);
// export default Radium(App);
