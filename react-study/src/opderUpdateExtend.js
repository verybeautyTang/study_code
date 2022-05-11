import React from 'react';

class SuperContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { a: false };
  }

  render() {
    return <Container setParentState={this.setState.bind(this)}/>
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { b: false };
  }

  render() {
    return <button onClick={this.handleClick}>是否是输出a：false b:true</button>
  }

  handleClick = () => {
    this.props.setParentState({ a: true });
    this.setState({ b: true });
    console.log(this.props)
    console.log(this.state.b)
  }
}


export default SuperContainer;