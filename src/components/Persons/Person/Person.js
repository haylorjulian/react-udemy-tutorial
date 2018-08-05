import React, { Component } from 'react';
import PropTypes from 'prop-types'

import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import WithClass from '../../../hoc/WithClass';
import AlternativeWithClass from '../../../hoc/AlternativeWithClass';
// import Radium from 'radium';

class Person extends Component {
  constructor(props) {
    super(props);
    // New React 16.3+ syntax for ref
    this.inputElement = React.createRef();
    console.log('[Person.js] inside constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidMount()');
    // focus() is available for inputElement
    if (this.props.position === 0) {
      // this.inputElement.focus();
      // Following is new React 16.3+ syntax for ref
      this.inputElement.current.focus();
    }
  }

  focus () {
    this.inputElement.current.focus();
  };

  render() {
    console.log('[Person.js] inside render()');
    return (
        <Aux>
          <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
          {/*Content between opening and closing component tags is accessed with props.children*/}
          <p>{this.props.children}</p>
          {/*We listen to changes and reflect the value from the start with value = props.name*/}
          <input
              // ref is a special property available in React stateful components
              // ref={(inp) => { this.inputElement = inp}}
              // Following is new React 16.3+ syntax for ref
              ref={this.inputElement}
              type="text"
              onChange={this.props.changed}
              value={this.props.name} />
        </Aux>
    )
  }
}
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default AlternativeWithClass(Person, classes.Person);
// export default Radium(person);