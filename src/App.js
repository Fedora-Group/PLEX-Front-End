import React from 'react' ;
import Main from './component/main';

import AuthProvider from '../src/context/auth';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Main/>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
