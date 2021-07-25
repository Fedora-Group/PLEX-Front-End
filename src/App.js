import React from 'react';
import Main from './component/main';
import { Provider } from 'react-redux';
import store from './store';
// import AuthProvider from '../src/context/auth';
import Events from './component/events';

import { BrowserRouter, Route } from 'react-router-dom';
import CreateRoom from './component/CreateRoom';
import Header from './component/Header';
import SignIn  from './component/signin'
import Signup from './component/signup';

function App() {
  return (
    <BrowserRouter>
      <div class='min-h-screen'>
        <Provider store={store}>
          {/* <div className='h-screen bg-gray-800'>
          
        </div> */}


          {/* <Main /> */}
          <Route exact path='/event'>
          <Events />
        </Route>
          <Route exact path='/createRoom'>
            <div>
              <CreateRoom />
            </div>
          </Route>
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
