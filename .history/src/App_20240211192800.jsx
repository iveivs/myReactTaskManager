import { useState } from 'react'

import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([])

  const handleChance = (event) => {
    setInput(
    })
    console.log(input);
  }

  const handleClick = () => {
    setTasks([...input])
    console.log('click');
    console.log(tasks);
  }

  return (
    <>
      <p>TODOSHKA</p>
      <input value={input} onChange={(e) => handleChance(e)} type="text" />
      <br /> 
      <button onClick={handleClick}>ADD</button>
      { input && <h4>{input}</h4> }
    </>
  )
}

export default App
