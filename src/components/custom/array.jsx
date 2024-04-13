 'use client'
import React, { useState } from 'react'

export default function ArrayComponent() {
  const { array, set, push, remove, filter, update, clear,fill,slice } = useArray([
    1, 2, 3, 4, 5, 6,
  ])

  return (
    <div className='flex flex-col gap-4 justify-center items-center max-w-124 mx-auto h-screen'>
      <div className='flex flex-col gap-2'>
      <div>Initial Array : {array }</div>
      <div>Array String{array.join(" | ")}</div>
      </div>
      <div className='flex flex-col gap-2'>
      <button onClick={() => push(Math.floor(Math.random()*10 ))}>Add an Element</button>
      <button onClick={() => update(1, 9)}>Change Second Element To 9</button>
      <button onClick={() => remove(1)}>Remove Second Element</button>
      <button onClick={() => filter(n => n < 3)}>
        Keep Numbers Less Than 4
      </button>
      <button onClick={() => fill("Sam",1,2)}>Fill Array with Sam</button>
      <button onClick={() => slice(2)}>Slice Array From 2 Element</button>
      <button onClick={() => set([1, 2])}>Set To 1, 2</button>
      <button onClick={clear}>Clear</button>
      </div>
    </div>
  )
} 
                                           {/* Array Hook */}


  function useArray(defaultValue) {
    const [array, setArray] = useState(defaultValue)
  
    function push(element) {
      setArray(a => [...a, element])
    }

    function fill(element, index1, index2){
       setArray(a => [...a.fill(element, index1,index2)])
    }

    function slice(index){
      setArray(a => [...a.slice(index)])
    }
  
    function filter(callback) {
      setArray(a => a.filter(callback))
    }
  
    function update(index, newElement) {
      setArray(a => [
        ...a.slice(0, index),
        newElement,
        ...a.slice(index + 1, a.length),
      ])
    }
  
    function remove(index) {
      setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)])
    }
  
    function clear() {
      setArray([])
    }
  
    return { array, set: setArray, push, filter, update, remove, clear,fill,slice }
  }
