import React from 'react';
import Main from './component/main';
import { Provider } from 'react-redux';
import store from './store';
// import AuthProvider from '../src/context/auth';
import Events from './component/events';

import { BrowserRouter, Route } from 'react-router-dom';
import CreateRoom from './component/CreateRoom';
import Header from './component/Header';

// import Brodcaster from './component/Brodcaster';
// import Watcher from './component/Watcher';
import Room from './component/Room';



import Details from './component/details';

import SignIn from './component/signin';
import BackToHome from './component/BackToHome';
import SignUp from './component/signup';
import MyEvents from './component/myEvents';


function App() {
  return (
    <BrowserRouter>
      <div class='min-h-screen'>
        <Provider store={store}>
          <Header />
          <Route exact path='/'>
            <div className='h-screen bg-gray-800 p-8'>

            <SignIn />
            <SignUp />

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

        <Route exact path='/event/:id'>
          <Details />
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


          <Route exact path='/myEvents'>
            <MyEvents/>
          </Route>



        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
