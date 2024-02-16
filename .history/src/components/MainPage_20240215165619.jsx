import { useEffect } from "react"
import { DataContext } from "./DataContext"
import { useContext } from "react"

export default function MainPage () {
    const { tasks } = useContext(DataContext)
    // console.log(tasks);
    function changeStatus(e) {
        // const isClicked = e.target.classList.contains('orange600')
        const isClicked = e.target.classList.toggle('orange600')
        console.log("parrent", e.target.previousSibling.textContent);
        e.target.previousSibling.textContent = e.target.previousSibling.textContent.style{textDecoration: lineThrough}}
    }
    return (
        <div>
            <h4 className="textTitle">MainPage</h4>
            { tasks && (
                tasks.map(task => (
                    <div key={task.id } className="taskItem">
                        <p >task: {task.task}</p>
                        <i onClick={(e) => {changeStatus(e)}} className="material-icons iconDone ">done</i>
                    </div>
                ))
            )}
        </div>
    )
}
