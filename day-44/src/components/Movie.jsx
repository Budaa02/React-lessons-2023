import { useParams, useLocation } from "react-router-dom"
import movieData from "../data/movies";

export default function Movie() {

    const { id } = useParams()
    const location = useLocation();
    console.log(location.state)
    const movie = movieData.filter(data => data.id == id)
    console.log(movie);





    return (
        <div>
            <h1>Movie Detail Page {id}</h1>
            {movie &&
                movie.map((m, index) => {
                    return(
                    <div key={index}>
                        <p>{m.name}</p>
                        <p>{m.id}</p>
                        <p>{m.ISBN}</p>
                        <p>{m.genre}</p>
                    </div>
                );

            })}
        </div>
    );
}