import React from 'react'
import {useSelector ,useDispatch}  from 'react-redux'

///import action method
import {incNumber, decNumber} from './Action/index'

function ReduxIncDec() {

    const myState = useSelector((state) => state.changeNumber)
    const dispatch = useDispatch()

    // const stateName = useSelector((state) => state.uersReducer)
    // const stateID = useSelector((state) => state.uersReducer)
  return (
    <div className='container'>

        <h3>Increment/Decrement</h3>

        <div className="quantity">
        <button className="btn btn-primary" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></button>
            <input name="quantity" type="text" defaultValue={myState}/>
        <button className="btn btn-primary" title="Increment" onClick={() => dispatch(incNumber())}><span>+</span></button>
      </div>

      <div className="quantity">
        {/* <button className="btn btn-primary" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></button> */}
            {/* <input name="quantity" type="text" value={stateName}/>
            <input name="quantity" type="text" value={stateID}/> */}
        {/* <button className="btn btn-primary" title="Increment" onClick={() => dispatch(incNumber())}><span>+</span></button> */}
      </div>
      
    </div>
  )
}

export default ReduxIncDec
