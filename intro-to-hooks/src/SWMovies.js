import React, { useState, useEffect } from "react";
import axios from "axios";

function SWMovies() {
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("");
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://swapi.dev/api/films/${number}`);
      setMovie(res.data);
    }
    getData();
  }, [number]);
  return (
    <div>
      <h1>Pick a Movie</h1>
      <p>You Chose: {number}</p>
      <select value={number} onChange={(e) => setNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
      <hr style={{ width: "75%" }} />
      <h1>{movie.title}</h1>
      <p>{movie.opening_crawl}</p>
    </div>
  );
}

export default SWMovies;
