import React, { Component } from 'react';

import AuthContext from '../../containers/auth-context';

class Login extends Component {
  static contextType = AuthContext;

  componentDidMount() {
    //now we have access to context in life cycle methods
    console.log(this.context);
  }

  render() {
    const authContext = this.context;
    return (
      <button onClick={authContext.toggleAuth}>
        {authContext.isAuth ? 'Logout' : 'Login'}
      </button>
    );
  }
}

export default Login;
