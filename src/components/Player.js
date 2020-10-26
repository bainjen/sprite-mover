import React from "react";
import Sprite from "./Sprite";
import useKeyPress from "../hooks/useKeyPress";
import useWalk from "../hooks/useWalk";

const Player = (props) => {
  const { direction, step, walk, position } = useWalk(3, props.setShowButton);
  console.log(position); 
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
