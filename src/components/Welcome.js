import React,{Component} from "react";


// destructing  props const{name}
class Welcome extends Component{
    render(){
        const {name} = this.props
     return (
     <div>
        <h1> Welcome {name}</h1>    
     </div>
     )
    }
}

export default Welcome;