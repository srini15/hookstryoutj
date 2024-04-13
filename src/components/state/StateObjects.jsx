'use client'
import React, {useState} from 'react'

const StateObjects = () => {
    const [name, setName] = useState({firstName:'',lastName:''})
    const handleFirstName = (e) => {
      setName({...name,firstName:e.target.value})
    }

    const handleLastName = (e) => {
     setName({...name,lastName:e.target.value})
    }

  return (
    <>
    <div>StateObjects</div>
    <div>
        <input
         value={name.firstName}
         onChange={handleFirstName}
         placeholder='Enter First Name'
         />

    </div>
    <div>
        <input 
        value={name.lastName}
        onChange={handleLastName}
        placeholder='Enter Last Name'
        
        />

    </div>

    <div>
      First  Name :   { name.firstName } <br />
      Last Name : {name.lastName}
    </div>
    </>
  )
}

export default StateObjects