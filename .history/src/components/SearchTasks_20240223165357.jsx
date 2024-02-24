import { useState } from "react"

export default function SearchTasks() {
    const [input, setInput] = useState('')

    const handleInput = (e) => {
        set e.target.value
    }
    return (
        <>
            <input value={input} type="text" onChange={handleInput} />
            <p>test: {input}</p>
        </>
    )
}