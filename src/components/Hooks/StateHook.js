import React,{useState} from 'react'

function StateHook() {
  // const intialCount = 0
  // const [count, setCount] = useState(intialCount)
  
  // const incrementFive = () => {
  //   for(let i =0 ; i < 5 ;i++)
  //     setCount (pervCount => pervCount + 1)
  //     console.log(count)
  // }

  // const [name ,setName] = useState({firstname:  "", lastname: ""})

  // const {firstname,lastname} = name;
  // const onInputChange = e => {
  //   setName ({...name ,[e.target.firstname]: e.target.value});
  //   setName ({...name ,[e.target.lastname]:e.target.value});
  // }

  //useState with array
  const[items, setItems ] =useState([]);

  const addItem = () =>{
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random() * 10 ) + 1
    }])
  }
  return (
    <div>
      <h3>State Hooks</h3>
      <button onClick={addItem}> Add Number</button>
      <ul>
        {items.map(item => (
          <li key={item.id}> {item.value}</li>
        ))}
      </ul>
      {/* //useState with object
       <form>
        <input type="text"
        value={name.firstname}
        onChange={e => setName({...name, firstname : e.target.value})}/>
        

        <input type="text"
        value={name.lastname}
        onChange={e => setName({...name, lastname: e.target.value})}/>
        
  
        <h4>First Name : {name.firstname}</h4>
        <h4>Last Name : {name.lastname}</h4>
      </form> */}

      {/* <p>Count - {count}</p>
      <button onClick={() => setCount(intialCount)} >Initial </button><br/>
      <button onClick={() => setCount(pervCount => pervCount + 1)} >Increment</button><br/>
      <button onClick={() => setCount(pervCount => pervCount - 1)} >Decrement</button>
      <button onClick={incrementFive} >incrementFive</button> */}
    </div>
  )
}

export default StateHook
