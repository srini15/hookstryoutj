'use client'
import React, {useState} from 'react'

const One = () => {
    const [value,setValue] = useState(true)
    const toggle = () =>{
        setValue(!value)
    }

    const makeTrue = () => {
        setValue(true)
    }

    const makeFalse = () => {
       setValue(false)
    }
  return (
     <>
     <div>
        <div> The value is : {value}</div>
        <div><button onClick = {toggle}>Toggle</button></div>
        <div><button onClick ={makeTrue}>Make True</button></div>
        <div><button onClick = {makeFalse}>Make False</button></div>
        <div></div>
     </div>
     </>
  )
}

export default One