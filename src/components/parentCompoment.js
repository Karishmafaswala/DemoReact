import React, { Component } from 'react'
import ChildCompoment from './childCompoment'

class ParentCompoment extends Component {
  
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'parent'
        }

        this.greetParent = this.greetParent.bind(this) 
    }
  
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
    return (
      <div>
        <ChildCompoment greetHandler = {this.greetParent}/>
      </div>
    )
  }
}

export default ParentCompoment
