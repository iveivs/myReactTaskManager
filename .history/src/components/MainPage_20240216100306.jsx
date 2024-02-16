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
        console.log(e.target.dataset.id);
        // setTasks([...tasks, newTask])
        setTasks((previousHistory) => previousHistory.map(elem => {
            if(elem.id == dataId) {
                return {
                  ...elem,
                  liked_by_user: !elem.liked_by_user,
                  likes: elem.likes + (isClicked ? -1 : 1) 
                }
            }
            return elem
        }))
    }
    return (
        <div>
            <h4 className="textTitle">MainPage</h4>
            { tasks && (
                tasks.map(task => (
                    <div key={task.id } className="taskItem">
                        <p >task: {task.task}</p>
                        <div className="iconBox">
                            <i onClick={(e) => {changeStatus(e)}} data-id={task.id} className="material-icons disabledColor">done</i>
                            <i  className="material-icons disabledColor">close</i>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}
