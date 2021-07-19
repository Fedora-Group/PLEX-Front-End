// everything but the header and the footer // Note this can be changed /deleted 
import React from 'react';

import SignUp from './signup';
import SignIn from './signin';

function Main() {
  return (
    <div>
      <h1>Hello Fedora</h1>
      <SignUp />
      <SignIn/>
    </div>
  )
}

export default Main;
