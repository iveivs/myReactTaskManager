import { DataContext } from "./DataContext"
import { useContext } from "react"

export default function NewTasks () {
    const { tasks } = useContext(DataContext)
    console.log(tasks);
    return (
        <div>
            <h3 className="textTitle">NewTasks:</h3>
            {
                // tasks.filter((task) => task.done === false )
                tasks.map(task => {
                    if(task.done === false )
                    return (
                        <div key={task.id } className="taskItem">
                        <p className="taskText" style={ task.done ? {textDecoration: 'line-through'} : {textDecoration: ''}}>task: {task.task} id: {task.id}</p>
                        <div className="iconBox">
                            <i onClick={(e) => { changeStatus(e) }} data-id={task.id} className={`material-icons disabledColor ${task.done ? "orange600" : " "}`} >done</i>
                            <i onClick={(e) => { deleteTask(e) }} data-id={task.id} className="material-icons disabledColor">close</i>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
