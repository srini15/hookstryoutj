'use client'

import { useState, useMemo } from "react";
/*
The useMemo hook is a way to optimize the performance of your React components by memoizing 
(or caching) the result of a function that is expensive to compute. This means that the function will
 only run when one of its dependencies changes, and otherwise it will return the same value as before.

const memoizedValue = useMemo(() => {
  // some expensive calculation
  return result;
}, [dependencies]);
*/

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};


const Counter1 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  //const calculation = expensiveCalculation(count);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, `Todo ${todos.length}`]);
  };

  return (
    <div className="flex flex-col max-w-96  mx-auto gap-3">
      <div className="flex flex-col justify-center">
        <h2 className='text-green-600'>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo} className="bg-slate-500  px-5 py-3">Add Todo</button>
      </div>
      <hr />
      <div className="flex flex-col gap-3">
        <div>
          <h6> Count: {count}</h6>
          <button className="bg-slate-500  px-5 py-3" onClick={increment}>Increment Count</button>
        </div>
        <hr />
        <div>
          <h2>Expensive Calculation</h2>
          {calculation}
        </div>
      </div>
    </div>
  );
};



export default Counter1