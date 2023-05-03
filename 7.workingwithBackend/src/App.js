import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const dummyMovies = [];
  const [movies, setMovies] = useState(dummyMovies);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = useCallback(async () => {
    // fetch'
    setError("");
    setLoading(true);
    try {
      const response = await fetch(
        "https://react-first-38e92-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw Error("something went wrong try again");
      }
      const responseJson = await response.json();
      let data = [];
      for (const key in responseJson) {
        data.push({
          id: key,
          key: key,
          title: responseJson[key].title,
          openingText: responseJson[key].openingText,
          title: responseJson[key].title,
        });
      }
      console.log(data);

      setLoading(false);
      setMovies(data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.log(error);
    }
  }, []);
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  let content = <p>no movie is loaded</p>;
  if (loading && !error) {
    content = <p>Loading ...</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }
  if (!error && movies.length !== 0 && !loading) {
    content = <MoviesList movies={movies} />;
  }

  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://react-first-38e92-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    fetchMovies();
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}></AddMovie>
      </section>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}
export default App;
