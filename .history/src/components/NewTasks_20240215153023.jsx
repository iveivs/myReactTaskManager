import { DataContext } from "./DataContext"
import { useContext } from "react"

export default function NewTasks () {
    const { tasks } = useContext(DataContext)
    // console.log('tasks', tasks);
    return (
        <div>
            <h3 className="textTitle">NewTasks:</h3>
        </div>
    )
}
