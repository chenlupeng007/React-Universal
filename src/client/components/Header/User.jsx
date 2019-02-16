import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { withStyles } from '@hoc'
import styles from './User.scss'

class User extends Component {
  constructor() {
    super()
    this.state = {
      isLogin: true
    }
  }

  render() {
    const { isLogin } = this.state
    return isLogin ? (
      <div className={styles.user}>
        欢迎您, <span>Tom</span>
        <Link to='/exit'>退出</Link>
      </div>
    ): (
      <div className={styles.user}>
        <Link to='/login'>立即登录</Link >
        <Link to='/register'>注册</Link>
      </div >
    )
  }
}

export default withStyles(User, styles);