import { useEffect } from "react"
import { DataContext } from "./DataContext"
import { useContext } from "react"

export default function MainPage () {
    const { tasks } = useContext(DataContext)
    return (
        <div>
            <h4>MainPage</h4>
            { tasks && (
                tasks.map(task => (
                    <p>main {task}</p>
                ))
            )}
        </div>
    )
}
