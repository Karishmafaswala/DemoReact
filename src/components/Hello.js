import React from "react";

const Hello = props => {
    console.log(props)
    return( 
    <div>
        <h3>Hello {props.name}</h3>
    </div>
     )
// without JSX
    // return React.createElement('div',{id: 'hello',className: 'hello'},
    // React.createElement('h2',null,'Hello JSX'))
}

export default Hello;