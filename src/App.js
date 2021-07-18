import React from 'react' ;
import Main from './component/main';

import AuthProvider from '../src/context/auth';

function App() {
  return (
    <AuthProvider>
      <Main/>
    </AuthProvider>
  );
}

export default App;
