 'use client'
 import React,{useState} from 'react'
 import useCouter from './useCouter'
 
 const CounterOne = () => {
    const [count, increment, decrement, reset] = useCouter(10,3)
     
    return (
      <div>
        <h2>Counter One</h2>
        <h3>{count}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
        
        
        
      </div>
    )
   
 }
 
 export default CounterOne