import { useEffect, useState } from "react";

interface IAwards {
  wins: number;
  nominations: number;
  text: string;
}
interface IImdb {
  rating: number;
  votes: number;
  id: number;
}
interface IViewer {
  rating: number;
  numReviews: number;
  meter: number;
}
interface ITomatoes {
  viewer: IViewer;
  lastUpdated: Date;
}

interface IMovies {
  _id: string;
  plot: string;
  genres: [string];
  runtime: number;
  rated: string;
  cast: [string];
  num_mflix_comments: number;
  title: string;
  fullplot: string;
  languages: [string];
  released: Date;
  directors: [string];
  writers: [string];
  awards: IAwards;
  lastupdated: string;
  year: number;
  imdb: IImdb;
  countries: [string];
  type: string;
  tomatoes: ITomatoes;
  poster: string;
}
export default function MoviesData(): JSX.Element {
  const ALL_MOVIES_URL =
    "http://localhost:8081/theaters/moviestest?page=1&moviesPerPage=28";

  const [movies, setMovies] = useState([]);

  async function fetchMovies(url: string): Promise<void> {
    const FETCHED_DATA = await fetch(url);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setMovies(FETCHED_JSON);
    console.log(FETCHED_JSON);
  }
  useEffect(() => {
    fetchMovies(ALL_MOVIES_URL);
  }, []);
  console.log(movies);
  return (
    <div className="container mx-auto flex justify-between flex-wrap gap-3 ">
      {movies.map((movie: IMovies, index: number) => (
        <div
          key={index}
          className=""
        >
          <div className=" basis-2/12 ">
            <img
              className="w-48 h-52 "
              src={movie.poster}
            />
            <div className="w-48">
              <p>{movie.title}</p>

              <p>{movie.directors} </p>

              <p>{movie.year} </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
