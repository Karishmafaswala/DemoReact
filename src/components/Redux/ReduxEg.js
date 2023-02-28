import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'

function ReduxEg(props) {

    console.log(props)
    const [count, setCount ] = useState(1)

    useEffect(() => {
        console.log('Hit API')
    },[count])

  return (
    <div>
        {/* <p>{props.userId - props.name}</p> */}
      <button onClick={() => setCount(perv => perv + 1)}> Add Count {count}</button>
    </div>
  )
}


const mapStateToProps = (state) => {
  console.log(state)
  return{
        users:state
    }
}

const mapDispatchToProps =(dispatch) =>{
  return{
    changeName : (name)=>{dispatch({type:'SET_NAME',payload:name})}
  }
}

export default connect(mapStateToProps)(ReduxEg)
