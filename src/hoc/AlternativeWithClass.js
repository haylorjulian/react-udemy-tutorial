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
  const AlternativeWithClass = class extends Component {
    render() {
      return (
          <div className={className}>
            {/*Spread operator passing props to the component*/}
            <WrappedComponent ref={this.props.forwardedRef} {...this.props}/>
          </div>
      )
    }
  };

  return React.forwardRef((props, ref) => {
    return <AlternativeWithClass {...props} forwardedRef={ref} />
  });
}


export default alternativeWithClass;