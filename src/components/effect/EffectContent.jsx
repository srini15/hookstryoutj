'use client'
import React, { useState, useEffect } from 'react'

const EffectContent = () => {
    const [contentType, setContentType] = useState('posts')
    const [items,setItems] = useState([])

    useEffect(() => {
         fetch(`https://jsonplaceholder.typicode.com/${contentType}`)
        .then(response => response.json())
        .then(json => setItems(json))
         
        console.log(items)
        return () => {
            console.log('Load Cleanup code executed!');
        };

       

    }, [contentType])
    return (
        <>

            <div className="flex flex-col gap-3 justify-center items-center">
                <div className="flex gap-3 m-3">
                    <button className='bg-slate-600 p-3 text-white' onClick={() => setContentType("posts")}>Posts</button>
                    <button className='bg-slate-600 p-3 text-white' onClick={() => setContentType("users")}>Users</button>
                    <button className='bg-slate-600 p-3 text-white' onClick={() => setContentType("comments")}>Comments</button>

                </div>
                <div>
                    {contentType}
                    {
                        items.map(item => {
                            return
                            (<pre>
                                {JSON.stringify(item)}
                            </pre>)
                        })
                    }
                </div>

            </div>


        </>
    )
}

export default EffectContent