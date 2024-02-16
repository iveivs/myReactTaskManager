import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import DoneTasks from './components/DoneTasks'
import Header from './components/Header'
import MainPage from './components/MainPage'
import NewTasks from './components/NewTasks'

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
          <Route index element={<MainPage />} />
          <Route path="/new" element={<NewTasks />} />
          <Route path="/done" element={<DoneTasks  />} />
        </Routes>
        <input 
          placeholder='' 
          className='inputMain' value={input} onChange={(e) => handleChance(e)} type="text" />
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
