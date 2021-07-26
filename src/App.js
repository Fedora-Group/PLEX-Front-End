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

import SignIn from './component/signin';
import Signup from './component/signup';
import BackToHome from './component/BackToHome';

function App() {
  return (
    <BrowserRouter>
      <div class='min-h-screen'>
        <Provider store={store}>
          <Header />
          <Route exact path='/'>
            <div className='h-screen bg-gray-800 p-8'>
              <Signup />
              {/* <Header />
              <Main /> */}
              {/* <Brodcaster /> */}
              {/* <Watcher /> */}
            </div>
          </Route>
          <Route exact path='/room/:id'>
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
          <Route path='/backtohome' exact>
            <BackToHome />
          </Route>
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
