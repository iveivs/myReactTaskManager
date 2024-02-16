import { useState } from 'react'

import './App.css'

function App() {
  const [input, setInput] = useState('')
  

  return (
    <>
      <p>TODOSHKA</p>
      <input onCh type="text" />
    </>
  )
}

export default App
