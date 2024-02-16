import { useEffect, useState } from "react"

export default function DateElement () {
    const [now, setNow] = useState(new Date())

    useEffect
    return (
        <>
             
            {/* <p>{now.toLocaleDateString()}</p> */}
            {now.toLocaleDateString()}
            
        </>
    )
}
