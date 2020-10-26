import React, {useState} from "react"; 
import styled from "styled-components"; 
import Map from "./Map"; 
import Scene from "./Scene"; 
import Left from "./Left"; 
import Right from "./Right"; 
import Top from "./Top";
import Bottom from "./Bottom";

const FrameDiv = styled.div`
  display: grid; 
  width: 75vw;
  height: 100vh; 
  grid-template-areas: 
    "top top top"
    "left game right"
    "bottom bottom bottom";
  grid-template-rows: 1fr 800px 1fr; 
  grid-template-columns: 1fr 1072px 1fr; 

  /* align-items: center; 
  justify-content: center;  */
`

const Frame = () => {

  const [showScene, setShowScene] = useState(false);
  const [showButton, setShowButton] = useState(false);
  
  return (
    <FrameDiv>
      <Top/>
      <Left />
       {showScene ? <Scene sceneNum={1}/> : <Map setShowButton={setShowButton}/>}
      <Right />
      <Bottom/>
      <button style={{position: "absolute", display: showButton ? "block" : "none"}} onClick={() => setShowScene(!showScene)}>change</button>
    </FrameDiv>
  )
}

export default Frame