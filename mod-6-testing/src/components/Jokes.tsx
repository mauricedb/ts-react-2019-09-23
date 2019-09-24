import React, { FunctionComponent } from "react";
import useFetch from "./useFetch";

type Joke = {
  id: number;
  joke: string;
};

const Jokes: FunctionComponent = () => {
  const { loading, data: jokes } = useFetch<Joke>("/api/jon-skeet.json");

  if (loading) {
    return (
      <div>
        <h2>Jokes</h2>
        <div>Loading...</div>
      </div>
    );
  }
  return (
    <div>
      <h2>Jokes</h2>
      <ul>
        {jokes.map(j => (
          <li key={j.id}>{j.joke}</li>
        ))}
      </ul>
    </div>
  );
};

export default Jokes;
