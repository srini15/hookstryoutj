'use client'
import React, { useEffect, useState } from 'react';

function EffectState() {
    // State example
    const [count, setCount] = useState(0);
    const [text, setText] = useState('')
    const [name, setName] = useState('')

    // useEffect example
    useEffect(() => {

        console.log('Component Mounted / Updated');

        return () => {
            console.log('Load Cleanup code executed!');
        };
    }, [name, count]);


    /*
    useEffect(() => {
        
        
        console.log(`count effect ran - ${count}`)

        document.title = `You clicked ${count} times`;
         
 
        
    },[count]);  
    */


    /*
     useEffect(() => {
         
         
         console.log(`name effect ran - ${name}`)
          
  
          
     },[name]);  
     */
    /*
       useEffect(() => {
           
           console.log('Load Effect ran!');
            
            
       },[count, name]);  
       */



    return (
        <>
            <div className='flex flex-col justify-center items-center gap-3'>
                <div className="flex p-3 items-center gap-2">
                    <p>Count: {count}</p>
                    <button onClick={() => setCount(count + 1)} className='bg-slate-300 p-3'>Increment</button>
                </div>
                <hr />
                <div className='flex justify-between items-center gap-3'>
                    <input
                        placeholder='Enter Text'
                        onChange={(e) => setText(e.target.value)}
                        className='border border-solid p-2' />
                    <button onClick={() => setName(text)} className='bg-slate-300 p-3'>Set Name</button>
                    <p>{name}</p>
                </div>
            </div>
        </>
    );
}

export default EffectState
