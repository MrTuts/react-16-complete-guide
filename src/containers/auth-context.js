import React from 'react';

/*
  moved to separate file to avoid circular require
*/

export default React.createContext({
  isAuth: false,
  toggleAuth: () => {},
});
