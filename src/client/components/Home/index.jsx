import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getTodoList } from './actions'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getTodoList()
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        <ul>
          {
            this.props.list.map(item => {
              return <li key={item.id}>{item.title}</li>
            })
          }
        </ul>
      </div>
    )
  }

  static loadData(store) {
    return store.dispatch(getTodoList())
  }
}

const mapStateToProps = state => ({
  list: state.todo.List
})

const mapDispatchToProps = dispatch => ({
  getTodoList: ()=> dispatch(getTodoList())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);