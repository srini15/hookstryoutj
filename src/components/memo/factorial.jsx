'use client'

import { useState,useMemo } from 'react';

export function  Factorial() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

   //const factorial = factorialOf(number);
  const factorial = useMemo(() => factorialOf(number), [number]);

  const onChange = event => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc(i => i + 1);
  
  return (
    <div className='flex flex-col max-w-96 mx-auto'>
      Factorial of 
      <input type="number" value={number} onChange={onChange} className='border border=solid border-slate-800' />
      is {factorial}
      <button onClick={onClick} className="bg-slate-500  px-5 py-3">Re-render</button>
    </div>
  );
}

function factorialOf(n) {
  console.log('factorialOf(n) called!');
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

export default Factorial