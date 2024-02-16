import { DataContext } from "./DataContext"
import { useContext } from "react"

export default function NewTasks () {
    const { tasks } = useContext(DataContext)
    // console.log('tasks', tasks);
    return (
        <div>
            <h2 className="textTitle">NewTasks</h2>
        </div>
    )
}
