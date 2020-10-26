import { useState } from "react";

const useWalk = (maxSteps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState(1);
  const [step, setStep] = useState(0);

  const stepSize = { x: 16, y: 16 };
  const modifier = {
    down: { x: 0, y: stepSize.y },
    up: { x: 0, y: -stepSize.y },
    left: { x: -stepSize.x, y: 0 },
    right: { x: stepSize.x, y: 0 },
  };

  const directions = {
    down: 2,
    left: 3,
    right: 1,
    up: 0,
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
