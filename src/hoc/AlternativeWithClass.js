import React, { Component } from 'react';

// Higher order component which wraps our component with a div containing className
// const alternativeWithClass = (WrappedComponent ,className) => {
//   return (props) => (
//       <div className={className}>
//         {/*Spread operator passing props to the component*/}
//         <WrappedComponent {...props}/>
//       </div>
//   )
// };

// Similar higher order component for stateful components
const alternativeWithClass = (WrappedComponent ,className) => {
  return class extends Component {
    render() {
      return (
          <div className={className}>
            {/*Spread operator passing props to the component*/}
            <WrappedComponent {...this.props}/>
          </div>
      )
    }
  }
};

export default alternativeWithClass;