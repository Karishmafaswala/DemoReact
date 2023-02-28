import React from "react";


// destructing  props {name, surName,children}
// destructing  props const{name, surName,children} =props
const Greet = ({name, surName,children}) => {
      return(
      <div>
         <h3>Hello {name} ,{surName}</h3>
       {children}
      </div>
      
   )
}

// function compoment
// function Greet(){
//  return(
//     <div>
//     <h1> hello world</h1>
    
//     </div>    
//  )
// }

export default Greet;
