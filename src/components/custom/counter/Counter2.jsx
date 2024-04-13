'use client'
import React, {useState} from 'react'

const CounterTwo = () => {

    const [count,setCount] = useState(0)
    const incrementCount = () => {
        setCount(count => count + 1)
    }
    const decrementCount = () => {
        setCount(count => count - 1)
    }   
  return (
    <>
    <div>
    <h2>CounterTwo</h2>
     <h3>{count} </h3>
    <button onClick={incrementCount}>Increment</button>
 
    <button onClick={decrementCount}>Decrement</button>
    </div>
    </>
  )
}

export default CounterTwo