import { useEffect } from "react"
import { DataContext } from "./DataContext"
import { useContext } from "react"

export default function MainPage () {
    const { tasks } = useContext(DataContext)
    // console.log(tasks);
    const changeStatus = () => {
        const isClicked = e.target.classList.contains('orange600')
        console.log("click");
    }
    return (
        <div>
            <h4 className="textTitle">MainPage</h4>
            { tasks && (
                tasks.map(task => (
                    <div className="taskItem">
                        <p >task: {task.task}</p>
                        <i onClick={(e) => {changeStatus(e)}} class="material-icons iconDone">done</i>
                    </div>
                ))
            )}
        </div>
    )
}
