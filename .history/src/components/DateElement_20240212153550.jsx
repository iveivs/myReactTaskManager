import { useEffect, useState } from "react"

export default function DateElement () {
    const [now, setNow] = useState(new Date())

    useEffect
    return (
        <div>
            <i className="date_range">date_range</i>
            <h5>DateElement</h5>
            <p></p>
        </div>
    )
}
