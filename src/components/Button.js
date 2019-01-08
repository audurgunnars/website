import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.a`
  color: black;
  padding: 10px;
  border: 1px solid black;
  text-decoration: none;
  font-size: 16px;
  align-self: center;
  margin-right: 10px;
  &:hover {
    background: black;
    color: white;
  }
`

class App extends Component {
  render () {
    return (
      <Button target='_blank' href={this.props.href} onClick={this.props.onClick}>{this.props.children}</Button>
    )
  }
}

export default App
