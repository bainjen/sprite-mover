import React from "react";
import styled from "styled-components"; 
import Player from "./Player"; 

// const MapContainer = styled.div`
//   display: flex; 
//   width: 100vw;
//   height: 100vh; 
//   align-items: center; 
//   justify-content: center; 
// `
const MapDiv = styled.div`
  position: relative;
  grid-area: game; 
  /* margin: 5%;  */
  /* top: 5%;
  left: 5%; */
  width: 1072px; 
  height: 800px;
  background-image: url(/assets/overWorld.jpeg); 
`
const Map = (props) => {
  return (
  //  <MapContainer> 
    <MapDiv>
      <Player setShowButton={props.setShowButton}></Player>
      </MapDiv>
  // </MapContainer> 
  )
};

export default Map;
