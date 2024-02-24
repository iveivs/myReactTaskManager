import { useState } from "react"
import { DataContext } from "./DataContext"
import { useContext } from "react"

export default function SearchTasks() {
    const [input, setInput] = useState('')

    const handleInput = (e) => {
        setInput(e.target.value) 
    }
    return (
        <>
            <input placeholder="Поиск по заметкам" value={input} type="text" onChange={handleInput} />
            <p>test: {input}</p>
        </>
    )
}