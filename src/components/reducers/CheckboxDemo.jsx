'use client'
import React,{useState} from 'react'

const CheckboxDemo = () => {
    const [lang, setLang] = useState([])
     
        const handleLangChange = (e) => {
            
            alert("value :" + e.target.value)
            alert("checked :"+ e.target.checked)
            const { value, checked } = e.target

           
            
            if (checked) {
                setLang([...lang, value])
            }
           
            else {
                setLang(lang.filter((e) => e !== value))
            }
             
            
        }
     
    return (
        <>
           <h2>Checkbox Demo</h2>
           <div>{lang}</div>
            <div className='flex border border-solid border-slate-100 gap-3'>
                <input type='checkbox' onChange={handleLangChange} value="PHP" />PHP
                <input type='checkbox' onChange={handleLangChange} value="Java" />Java
                <input type='checkbox' onChange={handleLangChange} value="React" />React
                <input type='checkbox' onChange={handleLangChange} value="CSharp" />C Sharp
            </div>

        </>
    )
}

export default CheckboxDemo