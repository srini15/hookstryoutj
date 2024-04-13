'use client'

import { useRef,useEffect } from "react";
/*
It can be used to access a DOM element directly.
The useRef Hook allows you to persist values between renders.
It can be used to store a mutable value that does not cause a re-render when updated.


*/
 

function FocusRef() {
  const inputElement = useRef(null);
  const inputElement2 = useRef(null)

  useEffect(()=>{
    inputElement2.current.value = 100
  })
  

  const focusInput = () => {
    inputElement.current.focus();
  };
  const blurInput = () => {
    inputElement.current.blur();
  };
  const setValue = () =>{
    inputElement.current.value = 5;
  }
  const setValue2 = () =>{
    inputElement2.current.value = 15;
  }
   

  return (
    <>
    <div className="flex flex-col gap-4 max-w-96 mx-auto">
      <input type="text" ref={inputElement}  />
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={blurInput}>Blur Input</button>
      <button onClick={setValue}>Set Value</button>

      <hr />

      <input type='text' ref={inputElement2} placeholder="InputElement 2" />
      <button onClick={setValue2}>Set Value2</button>
      
      </div>
      
    </>
  );
}

export default FocusRef