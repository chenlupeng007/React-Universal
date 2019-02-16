import React from 'react'
import { Link } from 'react-router-dom'

import { withStyles } from '@hoc'
import styles from './Navbar.scss'

const Nav = () => (
  <ul className={styles.nav}>
    <li>
      <Link to='/'>我的美团</Link>
      <dl>
        <dd><Link to='/'>我的订单</Link></dd>
        <dd><Link to='/'>我的收藏</Link></dd>
        <dd><Link to='/'>抵用券</Link></dd>
        <dd><Link to='/'>账户设置</Link></dd>
      </dl>
      </li>
    <li>
      <Link to='/'>手机App</Link>
    </li>
    <li>
      <Link to='/'>商家中心</Link>
    </li>
    <li>
      <Link to='/'>网站导航</Link>
    </li>
  </ul>
)

export default withStyles(Nav, styles);