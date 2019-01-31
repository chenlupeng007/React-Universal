import React, { Component } from 'react';
import styles from './Home.scss'
import withStyle from '@hco/withStyle'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      value: this.state.value + 1
    })
  }

  render() {
    return (
      <div>
        <h1 className = { styles.Home }>
          Home Page
        </h1>
        <button onClick = { this.handleClick }>{ this.state.value }</button>
      </div>
    )
  }
}

export default withStyle(Home, styles)