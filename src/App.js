import React, { useState } from "react";
// import Player from "./components/Player";
import Map from "./components/Map"; 
import Scene from "./components/Scene"; 

function App() {
  const [showScene, setShowScene] = useState(false);

  return (
    <div className="App">
      {showScene ? <Scene /> : <Map />}
      <button style={{position: "absolute"}} onClick={() => setShowScene(!showScene)}>change</button>
    </div>
  );
}

export default App;
