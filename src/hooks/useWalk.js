import { useState } from "react";
//path coordinates
//50x67
//(0, 688) (0, 43)
//(16, 688) (1, 43)
//(32, 688) (2. 43)
//(48, 688) (3, 43)
//(64, 688) (4. 43)
//(64, 672) (4, 42)
//(64, 656) (4, 41)
//(80, 656) (5, 41)
//(96, 656) (6, 41)
//(112, 656) (7, 41)
//(128, 656) (8, 41)
//(144, 656) (9, 41)
//(160, 656) (10, 41)
//(176, 656) (11, 41)
const createData = () => {
  let data = [];
  for (let i = 0; i < 50; i++) {
    let row = [];

    for (let j = 0; j < 67; j++) {
      //column object dictates where player can walk. 
      //could also make keys that are triggers for entry into a new scene 
      let column = {};
      if (
        (i === 0 && j === 43) ||
        (i === 1 && j === 43) ||
        (i === 2 && j === 43) ||
        (i === 3 && j === 43) ||
        (i === 4 && j === 43) ||
        (i === 4 && j === 42) ||
        (i === 4 && j === 41)
      ) {
        column.walkable = true;
      } else {
        column.walkable = false;
      }
      row.push(column);
    }
    data.push(row);
  }
  return data;
};

const useWalk = (maxSteps) => {
  const [position, setPosition] = useState({ x: 0, y: 688 });
  const [direction, setDirection] = useState(1);
  const [step, setStep] = useState(0);

  const mapData = createData();

  const bounds = {
    minX: 0,
    maxX: mapData.length,
    minY: 0,
    maxY: mapData[0].length,
  };
  // console.log(mapData[6][43]);

  const stepSize = { x: 16, y: 16 };

  //tells how far the player will move per step
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
    const newMapPositionX = (position.x + modifier[dir].x) / stepSize.x;

    const newMapPositionY = (position.y + modifier[dir].y) / stepSize.y;

    if (
      newMapPositionX >= bounds.minX &&
      newMapPositionX < bounds.maxX &&
      newMapPositionY >= bounds.minY &&
      newMapPositionY < bounds.maxY
    ) {
      const potentialMapPosition = mapData[newMapPositionX][newMapPositionY];

      if (potentialMapPosition.walkable) {
        setPosition((prev) => ({
          x: prev.x + modifier[dir].x,
          y: prev.y + modifier[dir].y,
        }));
      }
    }
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
