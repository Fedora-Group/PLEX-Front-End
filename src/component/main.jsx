// everything but the header and the footer // Note this can be changed /deleted 
import React from 'react';
import { Switch, Route} from "react-router-dom";
import SignUp from './signup';

import SignIn from './signin';

import AboutUs from './aboutus';
import Events from './events';


function Main() {
  return (
    <div>

      {/* change  */}
      <Switch> 

        <Route exact path="/">
          <h1>Hello Fedora</h1>
          <SignUp />
           <SignIn/>
        </Route>

        <Route exact path="/aboutus">
          <AboutUs/>
        </Route>
        
        <Route exact path="/event">
          <Events/>
        </Route>

      </Switch>

    </div>
  )
}

export default Main;
