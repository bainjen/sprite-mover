import React from "react";
import Sprite from "./Sprite";
import useKeyPress from "../hooks/useKeyPress";
import useWalk from "../hooks/useWalk";

//player in absolute position will scale with map relative to the item it is contained in 

const Player = (props) => {
  const { direction, walk, step, position, setShowButton } = props;
  //moving this over to Frame.js because the player is resetting with the map every time and need to pass props down
  // const { direction, step, walk, position } = useWalk(3, props.setShowButton);
  // console.log(position); 

  useKeyPress((event) => {
    event.preventDefault();
    const keyDirection = event.key.replace("Arrow", "").toLowerCase()
    walk(keyDirection)
  });

  return (
    <Sprite
      image="ranger_f"
      pos={position}
      data={{
        yPos: direction * 36,
        xPos: step * 32,
        h: 36,
        w: 32,
      }}
    />
  );
};

export default Player;

//responsible for movement of sprite(player)
