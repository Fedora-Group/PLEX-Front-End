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
import AboutUs from './component/aboutus';
import Details from './component/details';
import SignIn from './component/signin';
import SignUp from './component/signup';
import BackToHome from './component/BackToHome';
import Home from './component/home/Home';

import MyEvents from './component/myEvents'
import NotFound from './component/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div class='min-h-screen'>
        <Provider store={store}>
          <Route exact path='/'>
            <div className='min-h-screen'>
              {/* <Signup /> */}
              {/* <Header />
              <Main /> */}
              {/* <Brodcaster /> */}
              {/* <Watcher /> */}
              <Home />
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
            </div>
          </Route>
          <Route exact path='/login'>
          <SignIn />
          </Route>
          <Route exact path='/signup'>
          <SignUp />
          </Route>
          <Route path='/backtohome' exact>
            <BackToHome />
          </Route>

          <Route exact path='/myevents'>
            <MyEvents/>
          </Route>
          <Route exact path='/aboutus'>
          <AboutUs />
        </Route>


        <Route >
          <NotFound/>

        </Route>


        </Provider>
      </div>
    </BrowserRouter>
  );
}
export default App;