import React from "react";

const Scene = (props) => {
  const { sceneNum } = props; 
  return (
    <div>scene {sceneNum}</div>
  )
}

export default Scene 

//create a hook that corresponds to each scene trigger point in order to render the appropriate scene 

//in the Scene component, we can conditionally render the background, game, dialogue 
