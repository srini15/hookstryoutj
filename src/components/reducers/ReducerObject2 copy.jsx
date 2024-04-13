'use client'
import React, { useState,useReducer } from 'react'

const initialState = {
    name:'',
    active:'',
    project:'',
    lang:[]
}

const userReducer = (state,action) => {

    switch (action.type) {
        case 'updateName':
        return {...state,name:action.value}
        case 'updateActive':
         return {...state,active:action.value} 
        case 'updateProject' : 
          return {...state,project:action.value}
        case 'updateLang'  :
            if (state.lang.includes(action.value)) {
                return { ...state, lang: state.lang.filter(lang => lang !== action.value) };
            } else {
                return { ...state, lang: [...state.lang, action.value] };
            }

        default:
            return state;
    }

}

 

const ReducerObject2 = () => {
    const [user,dispatch] = useReducer(userReducer,initialState)

    const handleLangChange = () => {
        alert('Checkbox changed')
    }

    

    return (
        <>
            <div className='flex flex-col gap-5 mx-auto max-w-96 p-5'>
                <h2>Recucer Object</h2>
                <div className='flex flex-col gap-5'>
                    <div>
                        <input
                            placeholder="Enter Name"
                            onChange={(e)=>{dispatch({type:'updateName',value:e.target.value})}}
                            className='p-2 border border-solid border-slate-30'

                        />
                    </div>
                    <div className='flex border border-solid border-slate-100 gap-3'>
                        <input type='checkbox' onChange={(e) => {dispatch({type:'updateLang',value:e.target.value})}} value="PHP" />PHP
                        <input type='checkbox' onChange={(e) => {dispatch({type:'updateLang',value:e.target.value})}} value="Java" />Java
                        <input type='checkbox' onChange={(e) => {dispatch({type:'updateLang',value:e.target.value})}} value="React" />React
                        <input type='checkbox' onChange={(e) => {dispatch({type:'updateLang',value:e.target.value})}} value="CSharp" />C Sharp
                    </div>
                    <div className='flex gap-2'>
                        <input type='radio' name='activeStatus' value='Active' onChange={(e) => {dispatch({type:'updateActive',value:e.target.value})}} />Active
                        <input type='radio' name='activeStatus' value='Not Active' onChange={(e) => {dispatch({type:'updateActive',value:e.target.value})}} />Not Active
                    </div>

                    <div className='border border-solid border-slate-100'>
                        <select onChange={(e) => {dispatch({type:'updateProject',value:e.target.value})}}>
                            <option value='Project 1'>Project 1</option>
                            <option value='Project 2'>Project 2</option>
                            <option value='Project 3'>Project 3</option>
                            <option value='Project 4'>Project 4</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col justify-center items-center p-3 bg-slate-300 border border-solid border-slate-500 max-w-500 '>
                <p>Name :  {(user.name) ? user.name : "Pls enter Name"}  </p>
                <p>Status : {(user.active) ? user.active : "Pls Select Status"} </p>
                <p>Project : {(user.project) ? user.project : "Pls Select Project"}</p>               
                <p>Lang : {(user.lang) ? user.lang.map((lan=>lan +'  |  ')): "Pls Select Language"}</p>

            </div>





        </>

    )
}

export default ReducerObject2