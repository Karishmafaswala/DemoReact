import React, { Component } from 'react'

class UserGreet extends Component {
      
    constructor(props){
        super(props)
        this.state = {
            isLogIn : true
        }
    }

    render(){

        return this.state.isLogIn && <div> Welcome User!!</div>
        // ternary opertor
        // return this.state.isLogIn ?
        // (
        //     <div>
        //         Welcome User!!
        //     </div>
        // ):
        // (
        //     <div>
        //         Welcome Admin!!
        //     </div>
        // )
        
        // If else
            //  if (this.state.isLogIn){
            //             return <div>
            //                 Welcome User!!!
            //                 </div>
            //         }
            //         else{
            //             return <div>
            //                 Welcome Admin!!!
            //             </div>
            //         }
    }


}

export default UserGreet
