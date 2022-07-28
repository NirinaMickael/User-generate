import React from 'react';
import './App.scss';
import { PrivateRoute, PublicRoute } from './Routes';

function App() {
  return (
    <>
      <PublicRoute/>
      <PrivateRoute/>
    </>
  );
}

export default App;
