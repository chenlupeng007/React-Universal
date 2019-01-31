import React from 'react'
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import withStyle from '@hco/withStyle'
import styles from './Header.scss'

const Header = (props)=> (
  <div className = { styles.container }>
    <Link to='/' className = { styles.link }>Home</Link>
    <Link to='/about' className = { styles.link}>About</Link>
    { renderRoutes(props.route.routes) }
  </div>
)

export default withStyle(Header, styles)