import { useState } from "react"

export default function SearchTasks() {
    const [input, setInput] = useState('')

    const handleInput = (e) => {
        setInput(e.target.value) 
    }
    return (
        <>
            <input placeholder="" value={input} type="text" onChange={handleInput} />
            <p>test: {input}</p>
        </>
    )
}