import React, { useState } from "react"

function App() {
  // let num = 0
  

  function addCounter(){
    console.log("hello increment" , num)
  }
  function lessCounter(){
    console.log("hello decrement" , num)
  }
  return (
    <>
      <h1>hello world {num}</h1>
      <button onClick={addCounter}>+</button>
      <button onClick={lessCounter}>--</button>
    </>
  )

}

export default App