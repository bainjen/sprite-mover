import React, { useState } from "react";
// import Player from "./components/Player";
// import Map from "./components/Map";
// import Scene from "./components/Scene";
import Frame from "./components/Frame";
import Left from "./components/Left";

function App() {

  const [counter, setCounter] = useState(0);
  //counter is an example of persistent state

  return (
    <div className="App">
      <Frame />
      <button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
    </div>
  );
}

export default App;
