import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const dummyMovies = [
    {
      id: 1,
      title: "Some Dummy Movie",
      openingText: "This is the opening text of the movie",
      releaseDate: "2021-05-18",
    },
  ];
  const [movies, setMovies] = useState(dummyMovies);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchMovies() {
    // fetch'
    setError(false);
    setLoading(true);
    const response = await fetch("https://swapi.dev/api/films");
    try {
      const responseJson = await response.json();
      const data = responseJson.results;
      const modifiedData = data.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.created,
        };
      });

      setLoading(false);
      setMovies(modifiedData);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {loading && !error && <p>Loading ...</p>}
        {error && <p>unknown error occurred try agin</p>}
        {!error && !loading && <MoviesList movies={movies} />}
      </section>
    </React.Fragment>
  );
}

export default App;
