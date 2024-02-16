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
        <Header  />
        <Routes>
          <Route index element={<MainPhoto  />} />
          <Route path="/new" element={<HistoryPhoto  />} />
          <Route path="/done" element={<Favorite  />} />
          <Route path="/favorite" element={<Favorite  />} />
        </Routes>
        <input value={input} onChange={(e) => handleChance(e)} type="text" />
        <br /> 
        <button onClick={handleClick}>ADD</button>
        { input && <h4>{input}</h4> }
        { tasks && (
          tasks.map(e => <p key={e}>task: {e}</p>)
        )}
      </div>
      
    </>
  )
}

export default App
