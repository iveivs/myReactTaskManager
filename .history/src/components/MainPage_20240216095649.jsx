import { useEffect } from "react"
import { DataContext } from "./DataContext"
import { useContext } from "react"

export default function MainPage () {
    const { tasks } = useContext(DataContext)
    console.log(tasks);
    function changeStatus(e) {
        // const isClicked = e.target.classList.contains('orange600')
        const isClicked = e.target.classList.toggle('orange600')
        // console.log("parrent", e.target.parentNode.previousSibling);
        e.target.parentNode.previousSibling.style.textDecoration = 'line-through'
        // setTasks([...tasks, newTask])
    }
    return (
        <div>
            <h4 className="textTitle">MainPage</h4>
            { tasks && (
                tasks.map(task => (
                    <div key={task.id } className="taskItem">
                        <p >task: {task.task}</p>
                        <div className="iconBox">
                            <i onClick={(e) => {changeStatus(e)}} date className="material-icons disabledColor">done</i>
                            <i  className="material-icons disabledColor">close</i>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}
