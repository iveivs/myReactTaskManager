import { useState } from 'react'

import './App.css'

function App() {
  const [input, setInput] = useState('')
  const handleChance = () => {

  }

  return (
    <>
      <p>TODOSHKA</p>
      <input value={inp} onChange={handleChance} type="text" />
    </>
  )
}

export default App
