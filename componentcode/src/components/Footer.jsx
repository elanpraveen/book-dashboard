import React from 'react'
import styled from 'styled-components'

let Button =styled.button
 `background-color:blue;
  color:white;
  width:60px;
  height:40px;
 `

function callFunction(e){
    console.log(e)
    console.log("CalllFunction")
}
const Footer = () => {
 
  return (
    <>
     <div>Footer</div>
     <Button onClick={callFunction}>Click</Button>
     <Button onClick={(e)=>{callFunction(e)}}>Click-2</Button>
    </>
    
    
  )
}

export default Footer