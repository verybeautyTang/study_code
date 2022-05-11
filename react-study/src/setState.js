import React from 'react';

export default class SetState extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      sum: 0
    }
  }

  componentDidMount () {
      document.getElementById('myButtons').addEventListener('click', this.onClick.bind(this))
  }
  onClick () {
    console.log('before', this.state.sum)
    this.setState({ sum: this.state.sum + 1})
    this.setState({ sum: this.state.sum + 1})
    this.setState({ sum: this.state.sum + 1})
    this.setState({ sum: this.state.sum + 1})
    console.log('after',this.state.sum)
  }
  render () {
    return (
      <React.Fragment>
        {/* 同步更新 */}
        <button id="myButtons">not in React</button>
        {/* 异步更新 */}
        <button onClick={this.onClick.bind(this)}>In React</button>
      </React.Fragment>
      
    )
  }
}