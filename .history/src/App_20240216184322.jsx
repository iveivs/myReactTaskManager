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

  const renderLocalStorageData = () => {
    const data = localStorage.getItem("tasks")
    if (data) {
        return JSON.parse(data);
    } else {
        return []
    }
  }

  useEffect(()=> {
    setTasks(renderLocalStorageData)
  }, [])

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleClick = () => {
    console.log(tasks.length); // 0 1 
    console.log(tasks);
    let id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1 // 1
    console.log('id', id);
    const newTask = {
      task: input,
      id: id, // 1
      done: false
    }
    console.log('newTask id', newTask.id);
    setTasks([newTask, ...tasks])

    localStorage.setItem('tasks', JSON.stringify(tasks))

    setInput('')
    
  }

  return (
    <>
    <DataContext.Provider value={{
      tasks,
      setTasks
    }}>
      <div className="container">
        <Header  />
        <div className='input-field'>
          <input 
            placeholder='Введите новую запись' 
            className='inputMain' 
            value={input} 
            onChange={(e) => handleChange(e)} 
            type="text" />
        </div>
        
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
