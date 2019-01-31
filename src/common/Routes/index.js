import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import Home from '@components/Home'
import About from '@components/About'
import Header from '@components/Header'

const routes = [{
  path: '/',
  component: Header,
  routes: [
    {
      path: '/',
      component: Home,
      exact: true,
      key: 'Home'
    },
    {
      path: '/about',
      component: About,
      loadData: About.loadData,
      exact: true,
      key: 'About'
    }
  ]
}]

const Routes =
  <Switch>
    { renderRoutes(routes) }
  </Switch>

export { Routes, routes }