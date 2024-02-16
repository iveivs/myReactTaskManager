import { useEffect } from "react"
import { DataContext } from "./DataContext"
import { useContext } from "react"

export default function MainPage () {
    const { tasks, setTasks } = useContext(DataContext)
    console.log(tasks);
    function changeStatus(e) {
        // const isClicked = e.target.classList.contains('orange600')
        // const isClicked = e.target.classList.toggle('orange600')
        // console.log("parrent", e.target.parentNode.previousSibling);
        // e.target.parentNode.previousSibling.style.textDecoration = 'line-through'
        console.log(e.target.dataset.id);
        setTasks((previousTasks) => previousTasks.map(task => {
            if(task.id == e.target.dataset.id) {
                return {
                    ...task,
                    done: !task.done,
                }
            }
            return task
        }))
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    function deleteTask(e) {
        console.log('click');
    }

    return (
        <div>
            <h4 className="textTitle">MainPage</h4>
            { tasks && (
                tasks.map(task => (
                    <div key={task.id } className="taskItem">
                        <p className="taskText" style={ task.done ? {textDecoration: 'line-through'} : {textDecoration: ''}}>task: {task.task}</p>
                        <div className="iconBox">
                            <i onClick={(e) => {changeStatus(e)}} data-id={task.id} className={`material-icons disabledColor ${task.done ? "orange600" : " "}`} >done</i>
                            <i onClick={(e) => {deleteTask()}} className="material-icons disabledColor">close</i>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}
