import React,{useState,useEffect} from 'react'


function EffectHooks() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('mouse Event')
        // setX(e.clientX)
        // setY(e.clientY)
    }

    useEffect(() => {
        console.log("useEffect ")
        window.addEventListener('mouse', logMousePosition())
    })
    // const[count, setCount] = useState(0)
    // useEffect(() => {
    //     document.title = `Counter ${count}`;
    //     console.log(count)
    // },[count])
  return (
    <div>
    Hooks X ={x} - Y = {y}
    {/* <button onClick={() => setCount(count + 1)}> Counter-{count}</button> */}
    </div>
  )
}

export default EffectHooks
