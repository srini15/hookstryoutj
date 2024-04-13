'use client'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
 

const User = () => {
     
    const [users, setUsers] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');

    //setUser(user.userId = userId);

    // const handleFirstName = (e) => {
    //     setUser({...user,firstName:e.target.value});
    //   }

    const firstNameHandler = (e) =>{
      setFirstName(e.target.value);
    }

    const lastNameHandler = (e) =>{
      setLastName(e.target.value);
    }

    const emailHandler = (e) =>{
      setEmail(e.target.value);
    }

    const cityHandler = (e) =>{
      setCity(e.target.value);
    }

    const mobileHandler = (e) =>{
      setMobile(e.target.value);
    }


      const addUser = () => {
        
        const userID = uuidv4().substring(0,6);
        console.log(userID);
        const newUser = {
            userID,firstName,lastName,city,mobile,email
        }
    
        
        setUsers([...users,{userID,firstName,lastName,city,mobile,email}]);
        console.log(users)
        console.log(newUser)

        
        
      }
  

  return (
    <div>
      <h2 className="underline">User profile</h2>
      <div>
        <label>First Name: </label>
        <input type="text" name="firstName" value={firstName} onChange={firstNameHandler}/>
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" value={lastName} onChange={lastNameHandler}/>
      </div>

      <div>
        <label>City:</label>
        <input type="text" name="city" value={city} onChange={cityHandler}/>
      </div>

      <div>
        <label>Mobile</label>
        <input type="text" name="mobile" value={mobile} onChange={mobileHandler}/>
      </div>

      <div>
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={emailHandler}/>
      </div>

      <button onClick={addUser}>Add User</button>

      
    </div>
  )
}

export default User

 