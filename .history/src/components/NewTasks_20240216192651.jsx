import { DataContext } from "./DataContext"
import { useContext } from "react"

export default function NewTasks () {
    const { tasks } = useContext(DataContext)
    
    return (
        <div>
            <h3 className="textTitle">NewTasks:</h3>
            {
                tasks.filter(task => task.done ===)
            }
        </div>
    )
}
