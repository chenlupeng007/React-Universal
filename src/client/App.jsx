import React, { Component }from 'react'
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader/root'

// import About from '@components/About';
// import Home from '@components/Home';
import Routes from '../share/Routes'

const App = () => (
  <BrowserRouter>
    { Routes }
  </BrowserRouter>
)

export default hot(App)