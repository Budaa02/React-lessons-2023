import { useState } from "react";



export default function Panel({ children, title }) {



    const [isActive, setIsActive] = useState(false);
    return(
        <div>
            <h3>{title}</h3>
            {
                isActive ? <p>{children}</p>
                :<button onClick={() => setIsActive(true) }> show</button>
            }
        </div>
    )





    // const [isActive, setisActive] = useState(false)
    // function eventHandler(event) {
    //     event.preventDefault();
    //     setisActive(true)
        

    // }


    // return (
    //     isActive ? <p>1</p>
    //     :
    //     <div>
    //         <h3>asd</h3>
    //         <button onClick={eventHandler}>show</button>
    //         {isActive && <p>Lorem, ipsum.</p>}

    //     </div>
    // )
}



