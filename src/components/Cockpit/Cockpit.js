import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = classes.Button;

  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
      // If project uses React 16.2, you can now use a built-in "Aux" component - a fragment.
      // You can simply use <> - an empty JSC tag
      <Aux>
        <h1>{ props.appTitle }</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        {/*Now this is a very convenient syntax but it can be inefficient, react can re-render
          certain things in your app too often so I don't necessarily recommend using this if
          you don't have to, use the bind syntax instead*/}
        <button
            // style={style}
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
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
      </Aux>
  );
};

export default cockpit;