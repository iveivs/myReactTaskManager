import { DataContext } from "./DataContext"
import { useContext } from "react"

export default function NewTasks () {
    const { history, loading, getPhoto, changeLike } = useContext(DataContext)
    return (
        <div>
            <h2>NewTasks</h2>
        </div>
    )
}
