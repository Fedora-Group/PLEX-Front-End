import React from 'react';
import Main from './component/main';
import { Provider } from 'react-redux';
import store from './store';
// import AuthProvider from '../src/context/auth';
import Events from './component/events';

import { BrowserRouter, Route } from 'react-router-dom';
import CreateRoom from './component/CreateRoom';
import Header from './component/Header';

import Brodcaster from './component/Brodcaster';
import Watcher from './component/Watcher';
import Room from './component/Room';

import SignIn  from './component/signin'
import Signup from './component/signup';


function App() {
  return (
    <BrowserRouter>
      <div class='min-h-screen'>
        <Provider store={store}>

          <Route exact path='/'>
            <div className='h-screen bg-gray-800 p-8'>
              {/* <Header />
              <Main /> */}
              {/* <Brodcaster /> */}
              {/* <Watcher /> */}
            </div>
          </Route>
          <Route path='/room/04c8ea8a-1a27-4fc8-81d1-1adace7a56c8'>
            <Room />
          </Route>

          {/* <div className='h-screen bg-gray-800'>
          
        </div> */}


          {/* <Main /> */}
          <Route exact path='/event'>
          <Events />
        </Route>
          <Route exact path='/createRoom'>
            <div>
              <CreateRoom />
              <SignIn />
            </div>
          </Route>
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
