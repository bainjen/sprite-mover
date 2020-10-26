import React, { useState } from "react";
// import Player from "./components/Player";
import Map from "./components/Map"; 
import Scene from "./components/Scene"; 

function App() {
  const [showScene, setShowScene] = useState(false);
  const [showButton, setShowButton] = useState(false);

  return (
    <div className="App">
      {showScene ? <Scene sceneNum={1}/> : <Map setShowButton={setShowButton}/>}
      <button style={{position: "absolute", display: showButton ? "block" : "none"}} onClick={() => setShowScene(!showScene)}>change</button>
    </div>
  );
}

export default App;
