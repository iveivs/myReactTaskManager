import { useState } from "react"

export default function SearchTasks() {
    const [input, setInput] = useState('')

    const handleInput = (e) => {
        return e.target.value
    }
    return (
        <>
            <input type="text" onChange={handleInput} />
            <p>test: {input}</p>
        </>
    )
}