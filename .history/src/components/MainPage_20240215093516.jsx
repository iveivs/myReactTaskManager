import { useEffect } from "react"
import { DataContext } from "./DataContext"
import { useContext } from "react"

export default function MainPage () {
    const { tasks } = useContext(DataContext)
    // console.log(tasks);
    return (
        <div>
            <h4>MainPage</h4>
            { tasks && (
                tasks.map(task => (
                    <p key={task }>main task test: {task}</p>
                ))
            )}
        </div>
    )
}
