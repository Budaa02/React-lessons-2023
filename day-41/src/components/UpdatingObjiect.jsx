import { useState } from "react"




export default function UpdateObject() {
    const [user, setUser] = useState({age:18, name: "Dorj"})
    // user.age(28)
    const check = () => {
        // user.age += 20;
        setUser({age: user.age + 20, name :"Dorj"})
    }
    return (
        <div>
            Updating objiects

            <button onClick={check}>
                User age is {user.age}
            </button>
        </div>
    )

}