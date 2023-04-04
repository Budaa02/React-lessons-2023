import { useEffect,useState } from "react";

interface ITheater{
    name:string;
}

export default function Theater():JSX.Element{
    const[theaters, setTheaters] = useState<ITheater[]>([]);
    useEffect (() => {
        fetch("http://localhost:8081/theaters/list")
        .then((res)=> res.json())
        .then((data)=> setTheaters(data));

    },[])
    return(
        <div>
            <h1>Movies</h1>
            {theaters.map((theater,index) =>( <div key={index}>{theater.name}</div>))}
        </div>
    )
}