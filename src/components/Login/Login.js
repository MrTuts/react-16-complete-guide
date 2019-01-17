import React from 'react';

import { AuthContext } from '../../containers/App';

const login = () => (
  <AuthContext.Consumer>
    {authContext => {
      console.log(authContext);
      return (
        <button onClick={authContext.toggleAuth}>
          {authContext.isAuth ? 'Logout' : 'Login'}
        </button>
      );
    }}
  </AuthContext.Consumer>
);

export default login;
