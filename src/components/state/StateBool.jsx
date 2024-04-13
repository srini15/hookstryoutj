'use client'
import React,{ useState } from 'react'

const StateBool = () => {

    const [showText, setShowText] = useState(false)
  return (
    <>
    <div>State Bool</div>

    <div className='bg-green-500'>
        {
         showText && <h2>Text is Shown</h2>

        }
        
        
        
        </div>

    <div className='bg-red-500'>
        {
            !showText && <h2> Text is hidden</h2>
        }
        
     </div>    

     
    

    </>
  )
   
}

export default StateBool