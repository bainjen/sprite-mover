import React from 'react'; 
import styled from 'styled-components'; 

const SpriteDiv = styled.div`
  position: absolute;
  top: ${props => props.pos.y}px; 
  left: ${props => props.pos.x}px;
  height: ${props => props.h}px;
  width: ${props => props.w}px;
  background-image: url(/sprites/${props => props.image}.png); 
  background-repeat: no-repeat; 
  background-position: -${props => props.xPos}px -${props => props.yPos}px; 
`

const Sprite = (props) => {
  const { image, pos, data } = props
  const {yPos, xPos, h, w} = data
  
  return (
    <SpriteDiv image={image} pos={pos} yPos={yPos} xPos={xPos} h={h} w={w}/>
  )

}

export default Sprite; 

//responsible for handling rendering of sprite 
