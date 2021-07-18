import React from 'react' ;
import Main from './component/main';
import { Provider } from 'react-redux';
import store from './store'
// import AuthProvider from '../src/context/auth';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Main/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
