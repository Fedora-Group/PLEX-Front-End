// everything but the header and the footer // Note this can be changed /deleted 
import React from 'react';
import { Switch, Route} from "react-router-dom";
import SignUp from './signup';
import AboutUs from './aboutus';
function Main() {
  return (
    <div>
      {/* change  */}
      <Switch> 

        <Route exact path="/">
          <h1>Hello Fedora</h1>
          <SignUp />
        </Route>

        <Route exact path="/aboutus">
          <AboutUs/>
        </Route>
        
      </Switch>


    </div>
  )
}

export default Main;
