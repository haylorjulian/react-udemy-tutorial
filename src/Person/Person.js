import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = ( props ) => {

  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };

  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
      {/*Content between opening and closing component tags is accessed with props.children*/}
      <p>{props.children}</p>
      {/*We listen to changes and reflect the value from the start with value = props.name*/}
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  )
};

export default Radium(person);