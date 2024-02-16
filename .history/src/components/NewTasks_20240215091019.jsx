import { DataContext } from "./DataContext"
import { useContext } from "react"

export default function NewTasks () {
    const { tasks } = useContext(DataContext)
    console.log(object);
    return (
        <div>
            <h2>NewTasks</h2>
        </div>
    )
}
