import React from "react";
import styled from "styled-components";

const BottomDiv = styled.div`
  display: flex;
  grid-area: bottom;
  /* align-items: flex-end; 
  justify-content: center;  */
  background-color: red;
`;

const Bottom = () => {
  return <BottomDiv></BottomDiv>;
};

export default Bottom;
