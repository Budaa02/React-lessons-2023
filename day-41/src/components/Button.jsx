import { useState } from "react"
import element from "./P_tag"

function Button () {
    const [index, setIndex] = useState(0)
    const [memo, setMemo] = useState(element[index])
    return (
        <div>
            <button onClick={() => {
                setIndex(index + 1)
                setMemo(element[index + 1])
            }}>

            Submit</button>
            <input value={memo}> </input>
        </div>
    )
}

export default Button

