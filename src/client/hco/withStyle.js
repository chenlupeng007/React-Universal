import React, { Component } from 'react'

const withStyle = (DecoratedComponent, styles) => {
  return class extends Component {
    componentWillMount() {
      if(this.props.staticContext) {
        this.props.staticContext.css.push(styles._getCss())
      }
    }

    render() {
      return <DecoratedComponent { ...this.props } />
    }
  }
}

export default withStyle