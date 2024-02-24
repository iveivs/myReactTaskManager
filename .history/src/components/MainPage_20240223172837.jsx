import { useEffect } from "react"
import { DataContext } from "./DataContext"
import { useContext } from "react"

export default function MainPage () {
    const [input, setInput] = useState('')
    const { tasks, setTasks, changeStatus, deleteTask } = useContext(DataContext)

    const handleChange = (event) => {
        setInput(event.target.value)
        console.log('input', input);
    }

    const handleClick = () => {
        let id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1 
        const newTask = {
          task: input,
          id: id, 
          done: false
        }
    
        setTasks(prev => [...prev, newTask])
        console.log('task on handleclick btn', tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks))
        setInput('')
      }

    return (
        <div>
            <h4 className="textTitle">MainPage</h4>
            <div className='input-field'>
                <input 
                    placeholder='Введите новую запись' 
                    className='inputMain' 
                    value={input} 
                    onChange={(e) => handleChange(e)} 
                    type="text" />
            </div>
            <button className='btn blue-grey darken-1' onClick={handleClick}>ADD</button>
            { tasks && (
                tasks.map(task => (
                    <div key={task.id } className="taskItem">
                        <p className="taskText" style={ task.done ? {textDecoration: 'line-through'} : {textDecoration: ''}}>task: {task.task} id: {task.id}</p>
                        <div className="iconBox">
                            <i onClick={(e) => { changeStatus(e) }} data-id={task.id} className={`material-icons disabledColor ${task.done ? "orange600" : " "}`} >done</i>
                            <i onClick={(e) => { deleteTask(e) }} data-id={task.id} className="material-icons disabledColor">close</i>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}
