import React from 'react';

export default class OrderUpstate extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      isMan: true,
      isWoman: false,
    }
  }

  onClick () {
    this.setState({ isMan: false})
    this.setState({isWoman: true })
    console.log("🚀 ~ file: orderUpdate.js ~ line 14 ~ OrderUpstate ~ onClick ~ isMan", this.state.isMan)
    console.log("🚀 ~ file: orderUpdate.js ~ line 16 ~ OrderUpstate ~ onClick ~ isWoman", this.state.isWoman)
  }
  render () {
    return (
      <React.Fragment>
        <button onClick={this.onClick.bind(this)}>orderUpdate</button>
      </React.Fragment>
      
    )
  }
}