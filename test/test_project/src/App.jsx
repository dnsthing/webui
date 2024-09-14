import React, { useState } from 'react'
import './App.css'


const App = () => {

  const [state, setState] = useState("");
  
  function handleChange(e) {
    setState(e.target.value);
  }

  const handleOnClick = (e) => {
    alert(state);
  }
  return (
    <>
      <input onChange={handleChange} type = "text" placeholder='Enter name'></input>
      <button onClick={handleOnClick}>Submit</button>

      <p> Hello {state} </p>
      
    </>
  )
}

export default App
