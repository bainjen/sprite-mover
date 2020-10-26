import React from "react";
import styled from "styled-components";

const RightDiv = styled.div`
  display: flex;
  grid-area: right;
  /* align-items: flex-end; 
  justify-content: center;  */
  background-color: pink;
`;

const Right = () => {
  return <RightDiv></RightDiv>;
};

export default Right;
