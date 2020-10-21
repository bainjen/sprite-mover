import { useState } from "react";

const useWalk = (maxSteps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState(0);
  const [step, setStep] = useState(0);

  const stepSize = { x: 32, y: 36 };
  const modifier = {
    down: { x: 0, y: stepSize.y },
    up: { x: 0, y: -stepSize.y },
    left: { x: -stepSize.x, y: 0 },
    right: { x: stepSize.x, y: 0 },
  };

  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  };

  const move = (dir) => {
    setPosition((prev) => ({
      x: prev.x + modifier[dir].x,
      y: prev.y + modifier[dir].y,
    }));
  };

  const walk = (dir) => {
    setDirection((prev) => {
      if (directions[dir] === prev) move(dir);
      return directions[dir];
    });
    setStep((prev) => (prev < maxSteps - 1 ? prev + 1 : 0));
  };

  return { walk, direction, step, directions, position };
};

export default useWalk; 
