import React from 'react'


function click(){
    alert("Govind oru kena Punda");
}
export default function Button() {
  return (
    <button onClick={click} >Click</button>
  )
}
