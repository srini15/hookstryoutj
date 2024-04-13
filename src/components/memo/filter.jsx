'use client'

import { useState, useMemo } from "react";



function Filter() {

    const [filter, setFilter] = useState("");
    const [todos, setTodos] = useState([]);
    const addTodo = () => {
        setTodos((t) => [...t, `Todo ${todos.length}`]);
      };


 
  



    return (

        <div>
            <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className='border border=solid border-slate-800'
                placeholder="Search todos"

            />
            <button onClick={addTodo} className="bg-slate-500  px-5 py-3">Add Todo</button>

            <ul>
                {todos.map((todo) => (

                    <li key={todo.id}>{todo.text}</li>
                ))}

            </ul>
        </div>
    );
}

export default Filter
