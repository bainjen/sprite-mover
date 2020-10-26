import React, { useState } from "react";
import styled from "styled-components";


const RightDiv = styled.div`
  /* display: flex; */
  grid-area: right;
  /* align-items: flex-end; 
  justify-content: center;  */
  background-color: pink;
`;

const Right = () => {
  const [counter, setCounter] = useState(0);
  return (
    <RightDiv>
      <button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
    </RightDiv>
  );
};

export default Right;
