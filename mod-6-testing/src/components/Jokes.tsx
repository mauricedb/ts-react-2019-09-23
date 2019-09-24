import React, { FunctionComponent } from "react";
import useFetch from "./useFetch";

type Joke = {
  id: number;
  joke: string;
};

const Jokes: FunctionComponent = () => {
  const { loading, data: jokes } = useFetch<Joke>("/api/jon-skeet.json");

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <ul>
      {jokes.map(j => (
        <li key={j.id}>{j.joke}</li>
      ))}
    </ul>
  );
};

export default Jokes;
