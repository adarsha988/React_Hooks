import React, { Component } from 'react'

  class ClassComponent extends Component {
    constructor(props){
        super(props);
        this.state={
        count:0
        }
    }
  render() {
    return (
      <div style={{textAlign:"center", marginTop:"20px"}}>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Increment</button> 
        <button onClick={() => this.setState({count: this.state.count - 1})}>Decrement</button> 
        <button onClick={() => this.setState({count: 0})}>Reset</button>
      </div>
    )
  }
}
export default ClassComponent
