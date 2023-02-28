import React from 'react'

function ChildCompoment(props) {
    return (
      <div className='container-fluid m-3'>
        <button className='btn btn-info' onClick={() => props.greetHandler('Child')}> Greet Parent</button>
      </div>
    )
  }


export default ChildCompoment
