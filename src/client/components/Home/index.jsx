import React, { Component }from 'react';
import { Link } from 'react-router-dom';

// const Home = () => (
  // <div>
  //   <h1>Home Page</h1>
  //   <ul>
  //     <li><Link to='/'>Home</Link></li>
  //     <li><Link to='/about'>About</Link></li>
  //   </ul>
  // </div>
// )

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
        <h1>Home Page</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        <button onClick={this.handleClick}>
          {this.state.value}
        </button>
      </div>
    )
  }
}

export default Home