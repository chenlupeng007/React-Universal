import React, { Component }from 'react'
import { hot } from 'react-hot-loader/root'
import styles from './Home.scss';

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({value: this.state.value + 1})
  }

  render(){
    return (
      <h1>
        Home Page
        <button onClick={this.handleClick}>{this.state.value}</button>
      </h1>
    )
  }
}

export default hot(Home)