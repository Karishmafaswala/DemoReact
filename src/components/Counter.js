import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) 
  {
    super(props)
    this.state = {
        count: 0
    } 
  }
  
  increment() {
    this.setState({
        count :  this.state.count + 1

    },
    () => {
        console.log('CallBack', this.state.count )
    }
    )
    
    this.state.count = this.state.count + 1
    console.log(this.state.count)
  }
  
  render() {
    return (
        <div>
            <h4> Counter = { this.state.count} </h4> 
            <button onClick = {() => this.increment()} > Click me</button>
        </div>
      
    )
  }
}
export default Counter