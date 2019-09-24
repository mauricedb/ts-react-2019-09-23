import React from "react";

import Counter from "./components/Counter";
import Person from "./components/Person";
import Clock from "./components/Clock";

function App() {
  return (
    <div>
      <h1>React and TypeScript</h1>
      <Counter />
      <Person>A person</Person>
      <Clock interval={2000}></Clock>
    </div>
  );
}

export default App;
