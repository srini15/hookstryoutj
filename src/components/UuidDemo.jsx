import React from 'react'
//import { uuid } from 'uuidv4';
import { v4 as uuidv4 } from 'uuid';

const UuidDemo = () => {
    const myNum = uuidv4().substring(0,6)
  return (
    <div>UuidDemo
        <br />
        {myNum}
        <br />
       { Math.floor(Math.random() * 10) + 1 }
        
    </div>
  )
}

export default UuidDemo

 