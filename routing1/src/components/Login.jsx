import React, { useState } from "react";

const Login= ()=>{

    const [form, setForm]= useState({});

    const handleChange = (e)=>{
        const {id, value} = e.target;
        setForm({
            ...form,
            [id] : value
        })  
    }

    const submitForm= ()=>{

    }
    return <>
    <input 
      type="text" 
      id="name"
      placeholder="enter name"
      onChange={handleChange}
    
      />
       <input 
      type="text" 
      id="password"
      placeholder="enter password"
      onChange={handleChange}
      />

      <button onClick={submitForm} >sign in</button>


    </>
}
export{Login}