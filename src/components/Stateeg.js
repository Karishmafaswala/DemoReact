import React, { Component } from 'react'

class Student extends Component
{
    constructor(){
        super()
        this.state = { 
            studentmsg : "hello Student"
        }
        
        
        this.changeMessage = this.changeMessage.bind(this) // event handling using binding in class constructor
    }

    changeMessage() {
        this.setState({
            studentmsg : "Good Morning Student"
        })
        console.log("Clicked  Event")
    }

    //Event Handling using arrow func as properties
    // changeMessage = () =>{
    //     this.setState ({
    //         studentmsg : 'Good Morning Student'
    //     })
    // }

    render(){
        return(
            <div>

        
            <h3>{this.state.studentmsg}</h3>

            <button onClick = {this.changeMessage} >Click Me</button>
            
            {/* event handling using arrow function on onClick event */}
            <button onClick = {() => this.changeMessage()} >Click Me</button>
        </div>
        )
    }   
    
}

export default Student