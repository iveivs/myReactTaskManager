import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import DoneTasks from './components/DoneTasks'
import Header from './components/Header'
import MainPage from './components/MainPage'
import NewTasks from './components/NewTasks'
import { DataContext } from './components/DataContext'

function App() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState()


  // localStorage.setItem('tasks', JSON.stringify(tasks))
  const renderLocalStorageData = () => {
    const data = localStorage.getItem("tasks")
    console.log(data);
    if (data) {
        return JSON.parse(data);
    } else {
        return []
    }
}
// setTasks()
useEffect(()=> {
  setTasks
}, [])

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleClick = () => {
    let id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1
    const newTask = {
      task: input,
      id: id
    }
    console.log('newTask',newTask);
    
    setTasks([...tasks, newTask])
    setInput('')
    console.log('tasks',tasks);
  }

  return (
    <>
    <DataContext.Provider value={{
      tasks,
      setTasks
    }}>
      <div className="container">
        <Header  />
        <input 
          placeholder='Введите новую запись' 
          className='inputMain' 
          value={input} 
          onChange={(e) => handleChange(e)} 
          type="text" />
        <button className='btn light-blue lighten-4' onClick={handleClick}>ADD</button>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/new" element={<NewTasks />} />
          <Route path="/done" element={<DoneTasks  />} />
        </Routes>
        
        {/* { input && <h4>{input}</h4> } */}
        {/* { tasks && (
          tasks.map(e => <p key={e}>task: {e}</p>)
        )} */}
      </div>
      </DataContext.Provider>
    </>
  )
}

export default App
