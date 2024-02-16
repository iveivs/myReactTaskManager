import { DataContext } from "./DataContext"
import { useContext } from "react"

export default function DoneTasks () {
    const { tasks, changeStatus } = useContext(DataContext)
    return (
        <div>
            <h3 className="textTitle">Done Tasks:</h3>
            {
                tasks && (
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
                )
                
            }
        </div>
    )
}
