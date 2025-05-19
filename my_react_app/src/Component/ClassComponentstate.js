import React, { Component } from 'react'

class ClassComponentstate extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
            firstName:"",
        }
    }
    componentDidMount(){
        document.title=`Count ${this.state.count}`;
    }
    componentDidUpdate(prevprops, prevState){
         if(prevState.count !==this.state.count){
            console.log("Component Updated");
            document.title=`Count ${this.state.count}`
         }
    }
  render() {
    return (
      <div>
      <div style={{margin:"20px",alignItems:"center"}}></div>
      <h1>{this.state.count}</h1>
      <button onClick={()=> this.setState({count:this.state.count+1})}>Increment</button>
      <input type="text" value={this.state.firstName} onChange={(e)=>this.setState({firstName: e.target.value})}/>
      </div>
    )
  }
}
export default ClassComponentstate
