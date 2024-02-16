import { useState } from 'react'

import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([])

  const handleChance = (event) => {
    setInput(event.target.value)
    console.log('target',event.target.value);
    console.log('input',input);
  }

  const handleClick = () => {
    setTasks([...tasks, input])
    console.log('click');
    console.log(tasks);
    setInput('')
  }

  return (
    <>
      <p>TODOSHKA</p>
      <Heade  />
      <input value={input} onChange={(e) => handleChance(e)} type="text" />
      <br /> 
      <button onClick={handleClick}>ADD</button>
      { input && <h4>{input}</h4> }
      { tasks && (
        tasks.map(e => <p key={e}>task: {e}</p>)
      )}
    </>
  )
}

export default App
