import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root'

import { Routes } from '@common/Routes'
import configureStore from '@common/store'

export default hot(() => (
  <Provider store={configureStore(window.defaultState)}>
    <BrowserRouter>
      { Routes }
    </BrowserRouter>
  </Provider>
))



