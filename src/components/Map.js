import React from "react";
import styled from "styled-components"; 
import Player from "./Player"; 

const MapDiv = styled.div`
  position: absolute; 
  top: 0px;
  left: 0px;
  width: 1072px; 
  height: 800px;
  background-image: url(/assets/overWorld.jpeg); 
`
const Map = () => {
  return (
    <MapDiv>
      <Player></Player>
    </MapDiv>
  )
};

export default Map;
