import React from "react";

import Counter from "./components/Counter";
import Person from "./components/Person";
import Clock from "./components/Clock";

function App() {
  return (
    <div>
      <h1>React and TypeScript</h1>
      <Counter />
      <Person />
      <Clock inteval={2000}>The current time is:</Clock>
    </div>
  );
}

export default App;
