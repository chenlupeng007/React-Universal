import React from 'react'
import { hydrate } from 'react-dom'
// import { Provider } from 'react-redux';

import App from '@client/App'
// import store from '@client/store'

// const Root =
//   <Provider store={store}>
//     <App />
//   </Provider>

const Root = <App />

hydrate(Root, document.getElementById('root'));

if (module.hot) {
  module.hot.accept()
}