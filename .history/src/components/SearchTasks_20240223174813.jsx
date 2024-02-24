import { useState } from "react"
import { DataContext } from "./DataContext"
import { useContext } from "react"

export default function SearchTasks() {
    const [input, setInput] = useState('')
    const { tasks } = useContext(DataContext)

    const handleInput = (e) => {
        setInput(e.target.value) 
    }
    return (
        <>{
            tasks.filter(task => task.task.toLowerCase().includes(input.toLowerCase()))
            .map(())
        }
            <input placeholder="Поиск по заметкам" value={input} type="text" onChange={handleInput} />
            <p>test: {input}</p>
        </>
    )
}