import { } from '@material-ui/core';
import React, { } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
// import Header from './components/Header'
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';
function App() {
  return (
    <div>

      <Header/>
      <Route path='/' component={Homepage} exact />
      <Route path='/coins/:id' component={CoinPage}/>

    </div>
  );
}
export default App;
