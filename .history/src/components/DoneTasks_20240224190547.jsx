import { DataContext } from "./DataContext"
import { useContext } from "react"

export default function DoneTasks () {
    const { tasks, changeStatus, deleteTask } = useContext(DataContext)
    return (
        <div>
            <h4 className="textTitle">Done Tasks:</h4>
            {
                tasks && (
                    tasks.map(task => {
                        if(task.done === true )
                        return (
                            <div key={task.id } className="taskItem">
                                <p className="taskText" style={ task.done ? {textDecoration: 'line-through'} : {textDecoration: ''}}>task.task} </p>
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
