import React from 'react'
import { render } from 'react-dom'

import Home from './Home.jsx'

render(<Home />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./Home', ()=> {
    render(<Home />, document.getElementById('root'));
  })
}