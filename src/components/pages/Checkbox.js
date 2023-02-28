import React,{useState} from 'react'

function Checkbox() {

    const handleSubmit = e => {
        e.preventDefault();
        const checkedValues = Array.from(e.target.course).map(el => [
          el.id,
          el.checked
        ]);
        console.log(Object.fromEntries(checkedValues));
      };
      
    return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <form onSubmit={handleSubmit}>
        {["alpha", "bravo", "charlie", "delta"].map(i => (
          <label key={i}>
            {i}
            <input type="checkbox" id={i} name="course" />
          </label>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Checkbox
