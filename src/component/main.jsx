// everything but the header and the footer // Note this can be changed /deleted
import React from 'react';
import Chat from './chat';

import { Switch, Route } from 'react-router-dom';
import SignUp from './signup';

import SignIn from './signin';

import AboutUs from './aboutus';
import Events from './events';
import Hero from './Hero';

function Main() {
  return (
    <Switch>
      <div class='flex flex-wrap overflow-hidden p-8 bg-gray-800 h-full'>
        <Route exact path='/'>
          <Hero />
          {/* <SignUp />
          <SignIn /> */}
        </Route>

        <Route exact path='/aboutus'>
          <AboutUs />
        </Route>

        <Route exact path='/event'>
          <Events />
        </Route>
        <Route exact path='/login'>
          <Hero />
        </Route>
      </div>
    </Switch>
  );
}

export default Main;
