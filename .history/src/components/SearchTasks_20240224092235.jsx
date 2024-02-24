import { useState } from "react"
import { DataContext } from "./DataContext"
import { useContext } from "react"

export default function SearchTasks() {
    const [input, setInput] = useState('')
    const { tasks } = useContext(DataContext)
    console.log(tasks);

    const handleInput = (e) => {
        setInput(e.target.value) 
    }
    return (
        <>  
            <h4 className="textTitle">Поиск по заметкам</h4>
            <input placeholder="Введите тек" value={input} type="text" onChange={handleInput} />
            {
                tasks && (
                        tasks
                            .filter((task) => task.task.toLowerCase().includes(input.toLowerCase()))
                            .map((task) => (
                                <div key={task.id } className="taskItem">
                                    <p className="taskText" style={ task.done ? {textDecoration: 'line-through'} : {textDecoration: ''}}>task: {task.task} id: {task.id}</p>
                                    <div className="iconBox">
                                        <i onClick={(e) => { changeStatus(e) }} data-id={task.id} className={`material-icons disabledColor ${task.done ? "orange600" : " "}`} >done</i>
                                        <i onClick={(e) => { deleteTask(e) }} data-id={task.id} className="material-icons disabledColor">close</i>
                                    </div>
                                </div>
                            ))
                        )
            }
            
        </>
    )
}