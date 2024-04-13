'use client'
import React, { useState } from 'react';

function FormDemo() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        city: '',
        mobile: '',
        telephone: ''
    });

    const [users, setUsers] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, e.g., send data to server or perform validation
        const newUser = { ...formData };
        setUsers([...users, newUser]);
        setFormData({
            firstname: '',
            lastname: '',
            city: '',
            mobile: '',
            telephone: ''
        });
    };

    return (
        <div>
            <h2>React Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange}   required />
                    <small>Format: 10 digits without spaces or dashes</small>
                </div>
                <div>
                    <label htmlFor="telephone">Telephone</label>
                    <input type="text" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange}   />
                    <small>Format: 10 digits without spaces or dashes</small>
                </div>
                <button type="submit">Submit</button>
            </form>
            <h2>Users List</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {user.firstname} {user.lastname}, <strong>City:</strong> {user.city}, <strong>Mobile:</strong> {user.mobile}, <strong>Telephone:</strong> {user.telephone}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FormDemo;