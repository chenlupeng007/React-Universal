import React from 'react'
import { renderRoutes } from 'react-router-config'
import { withStyles } from '@hoc';
import antStyles from '@antd'

const Empty = (props) => (
  <React.Fragment>
    { renderRoutes(props.route.routes) }
  </React.Fragment>
)

export default withStyles(Empty, ...antStyles)