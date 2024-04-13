'use client'
import React, { useState, useMemo } from 'react';

const MemoOne= () => {
  // State to hold the input value
  const [inputValue, setInputValue] = useState('');

  // Expensive computation function
  const computeExpensiveValue = (input) => {
    // Simulating an expensive computation
    console.log("Expensive computation is done");
    return input.length * 2;
  };

  // Memoized value using useMemo
  const memoizedValue = () => computeExpensiveValue(inputValue)
  //const memoizedValue = useMemo(() => computeExpensiveValue(inputValue), [inputValue]);

  return (
    <div className='flex flex-col max-w-96 mx-auto'>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Length of input doubled: {memoizedValue}</p>
    </div>
  );
};

export default MemoOne;
