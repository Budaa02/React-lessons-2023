import { useEffect, useState } from "react";


export default function Movies():JSX.Element {
    const ALL_MOVIES_URL = "http://localhost:8081/theaters/list"
    interface IGeo{
        type:{
            type:string,
            enum:["Point"],
            required:true
        },
        coordinates:{
            type:[number,number],
            required: true
        }
    }
    
    interface IAddress{
        street1:string,
        city:string,
        state:string,
        zipcode:string
    }
    
    interface ILocation {
        address:IAddress,
        geo:IGeo
    }
    
    
    interface ITheater {
        theaterId:number,
        location: ILocation,
    }

    const [theaters, setTheaters] = useState<ITheater[]>([]);
    async function fetchTheaters(url:string):Promise<void> {
        const FETCHED_DATA = await fetch(url);
        const FETCHED_JSON = await FETCHED_DATA.json();
        setTheaters(FETCHED_JSON);
  
        console.log(FETCHED_JSON[0])
    }
    useEffect (()=> {
        fetchTheaters(ALL_MOVIES_URL);
    },[])
    console.log(theaters)
    return(
        <div>
            {
            theaters.map((movie,index) => 
                 <h2 key={index}>{movie.theaterId}</h2>
            )}
        </div>
    )
}