'use client'
import React, { useState } from 'react'

const ReducerObject = () => {
    const [name, setName] = useState('')
    const [active, setActive] = useState('')
    const [project, setProject] = useState('')
    const [lang, setLang] = useState([])

    const handleLangChange = (e) => {
        const { value, checked } = e.target
        if (checked) {
            setLang([...lang, value])
        }
        else {
            setLang(lang.filter((e) => e !== value))
        }
    }

    const handleActiveChange = (e) => {

        setActive(e.target.value)
    }

    const handleProjChange = (e) => {
        setProject(e.target.value)

    }

    return (
        <>
            <div className='flex flex-col gap-5 mx-auto max-w-96 p-5'>
                <h2>Recucer Object</h2>
                <div className='flex flex-col gap-5'>
                    <div>
                        <input
                            placeholder="Enter Name"
                            onChange={(e) => { setName(e.target.value) }}
                            className='p-2 border border-solid border-slate-30'

                        />
                    </div>
                    <div className='flex border border-solid border-slate-100 gap-3'>
                        <input type='checkbox' onChange={handleLangChange} value="PHP" />PHP
                        <input type='checkbox' onChange={handleLangChange} value="Java" />Java
                        <input type='checkbox' onChange={handleLangChange} value="React" />React
                        <input type='checkbox' onChange={handleLangChange} value="CSharp" />C Sharp
                    </div>
                    <div className='flex gap-2'>
                        <input type='radio' name='activeStatus' value='Active' onChange={handleActiveChange} />Active
                        <input type='radio' name='activeStatus' value='Not Active' onChange={handleActiveChange} />Not Active
                    </div>

                    <div className='border border-solid border-slate-100'>
                        <select onChange={handleProjChange}>
                            <option value='Project 1'>Project 1</option>
                            <option value='Project 2'>Project 2</option>
                            <option value='Project 3'>Project 3</option>
                            <option value='Project 4'>Project 4</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center p-3 bg-slate-300 border border-solid border-slate-500 max-w-500 '>
                <p>Name :  {(name) ? name : "Pls enter Name"}  </p>
                <p>Lang : {(lang) ? lang : "Pls Select Language"}</p>
                <p>Project : {(project) ? project : "Pls Select Project"}</p>
                <p>Status : {(active) ? active : "Pls Select Status"} </p>

            </div>





        </>

    )
}

export default ReducerObject