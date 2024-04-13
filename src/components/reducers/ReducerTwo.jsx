'use client'
import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return state + action.value
		case 'decrement':
			return state - action.value
		 
		case 'reset':
			return initialState
		default:
			return state
	}
}

function CounterTwo() {
	const [count, dispatch] = useReducer(reducer, initialState)

	return (
		<div className='flex gap-4 flex-col justify-center items-center min-h-screen'>
            
			<div className='text-3xl'>Count = {count}</div>
            <div className='flex gap-4'>
			<button onClick={() => dispatch({ type: 'increment', value: 1 })}>
				Increment
			</button>
			<button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
				Decrement
			</button>
			<button onClick={() => dispatch({ type: 'increment', value: 5 })}>
				Increment 5
			</button>
			<button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
				Decrement 5
			</button>
			<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
			 
			 
		</div>
	)
}

export default CounterTwo