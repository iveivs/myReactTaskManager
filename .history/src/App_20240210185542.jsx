import { useState } from 'react'

import './App.css'

function App() {
  const [input, setInput] = useState('')
  const handleChance = (event) => {
    setInput(event.target.value)
    console.log(input);
  }

  return (
    <>
      <p>TODOSHKA</p>
      <input value={input} onChange={(e) => handleChance(e)} type="text" />
      
      { input && <h4>{input}</h4>}
    </>
  )
}

export default App
