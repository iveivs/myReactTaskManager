import { useState } from 'react'

import './App.css'

function App() {
  const [input, setInput] = useState('')
  const handleChance = (event) => {
    setInput(e)
    console.log(object);
  }

  return (
    <>
      <p>TODOSHKA</p>
      <input value={input} onChange={handleChance} type="text" />
    </>
  )
}

export default App
