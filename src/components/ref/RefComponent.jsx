'use client'
import { useState, useEffect, useRef } from "react";

function RefComponent() {
    const inputRef = useRef(null);
  
    function focusInput() {
      inputRef.current.focus();
    }
  
    return (
      <div>
        <input ref={inputRef} className="border border-dashed border-slate-900" />
        <button onClick={focusInput} className="bg-slate-600 p-4 text-white">Focus Input</button>
      </div>
    );
  }

  export default RefComponent
  