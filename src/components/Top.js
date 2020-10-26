import React from "react";
import styled from "styled-components";

const TopDiv = styled.div`
  display: flex;
  grid-area: top;
  /* align-items: flex-end; 
  justify-content: center;  */
  background-color: red;
`;

const Top = () => {
  return <TopDiv></TopDiv>;
};

export default Top;
