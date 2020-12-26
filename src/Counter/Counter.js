import React,{Component} from 'react';

class Counter extends Component{

    state={
        count :0,
    }

    addOne = () => {
       const presentState= this.state.count + 1;
  this.setState({count: presentState});
      };
  minusOne = () => {
    const presentState= this.state.count - 1;
    this.setState({count: presentState});
      };
      reset = () => {
        this.setState({count : 0});
       
      };
    render(){
        return(
            <div style={{marginTop:"50px"}}>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.addOne}>+1</button>
            <button onClick={this.minusOne}>-1</button>
            <button onClick={this.reset}>reset</button>
          </div>
        );
    }
}
export default Counter;