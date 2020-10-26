import React, { useState } from "react";
import Player from "./components/Player";
import Map from "./components/Map"; 

function App() {
  const [xPos, setXPos] = useState(0);
  return (
    <div className="App">
      {/* <Player /> */}
      <Map/>
    </div>
  );
}

export default App;
