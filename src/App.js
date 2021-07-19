import React from 'react' ;
import Main from './component/main';
import { Provider } from 'react-redux';
import store from './store'
// import AuthProvider from '../src/context/auth';

function App() {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}

export default App;
