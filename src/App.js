import React from 'react';
import Main from './component/main';
import { Provider } from 'react-redux';
import store from './store';
// import AuthProvider from '../src/context/auth';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='h-screen bg-gray-800'>
          <Main />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
