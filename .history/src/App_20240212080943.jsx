import { useState } from 'react'

import './App.css'
import Header from './components/Header'

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
      <div className="container">
        

      </div>
      
    </>
  )
}

export default App
