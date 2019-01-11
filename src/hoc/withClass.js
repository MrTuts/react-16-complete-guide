import React, { Component } from 'react';

// const withClass = (WrappedComponent, className) => {
//   return props => (
//     <div className={className}>
//       <WrappedComponent {...props} />
//     </div>
//   );
// };

const withClass = (WrappedComponent, className) => {
  const WithClass = class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent
            ref={this.props.forwardedRef} // pass the ref as prop
            {...this.props}
          />
        </div>
      );
    }
  };

  /* 
    pass ref of the WrappedComponent as props to WithClass
  */
  return React.forwardRef((props, ref) => {
    return <WithClass {...props} forwardedRef={ref} />;
  });
};

export default withClass;
