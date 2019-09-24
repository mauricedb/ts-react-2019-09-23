import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./components/Person";

const App: React.FC = () => {
  return (
    <div className="App">
      <Person />
    </div>
  );
};

export default App;
