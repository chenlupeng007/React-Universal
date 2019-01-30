import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '@components/Home'
import About from '@components/About'

const routes = [
  {
    path: '/',
    component: Home,
    loadData: Home.loadData,
    exact: true,
    key: 'Home'
  },
  {
    path: '/about',
    component: About,
    exact: true,
    key: 'About'
  }
]

const Routes =
  <Switch>
    {routes.map(route => (<Route {...route}></Route>))}
  </Switch>

export { Routes, routes }