import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [counter , setCounter] = useState(0)
    const [counterTwo , setCounterTwo] = useState(0)

    useEffect(()=>{
        console.log("counter component mounted");


        return ()=>{
            console.log("component unmount");
            
        }
        
    } , [counter])

  return (
    <>
    <h1>Counter {counter} {counterTwo}</h1>
    <button onClick={()=> setCounter(counter + 1)}>add {counter}</button>
    <button onClick={()=> setCounterTwo(counterTwo + 5)}>add {counterTwo}</button>
    </>
  )
}

export default Counter