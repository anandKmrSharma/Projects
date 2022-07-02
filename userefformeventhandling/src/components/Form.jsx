import React, { useState, useRef } from "react";

const Form=()=>{    
    // const ref= useRef(null);
const [text, setText]= useState("");
    const [form, setForm]= useState({
        name:"",
        age: "",
        address:""
    })
    const inputValue= (e)=>{
        setText(e.target.value)
       const {value, id}= e.target;
        setForm({
            ...form,
            [id]: value
        })
        console.log("form input", form);

    }

    const submitform=(e)=>{
        e.preventDefault()
        console.log("form befor", form);
        setText("");
           

    }
    console.log("form after ", form);


    return <>
    <h3>enter your details</h3>

    <form>
        <input 
        id="name"
        value={text}
        onChange={inputValue}
        type="text" 
        placeholder="enter your details"
         />
         <input 
        id="age"
        value={text}
        onChange={inputValue}
        type="number" 
        placeholder="enter your age"
         />
         <input 
        id="address"
        value={text}
        onChange={inputValue}
        type="text" 
        placeholder="enter your address"
         />
         <input 
        onChange={inputValue}
        // ref={ref}
        type="file"
         />
         <button onClick={submitform} >submit</button>
    </form>
    </>
}

export {Form};






// import React, {useState, useRef} from "react";

// const Form = ()=>{

//     const [form, setForm]= useState({
//         username: "",
//         age:"",
//         address: ""
//     })
//     const ref= useRef(null);

//     const handleData = (e)=>{
//        console.log(e.target.value)
//        console.log(ref.current)

//     const {name, value} = e.target;

//     setForm({
//         ...form, 
//         [name] :value
//     })
//     // console.log("form", form)
//     }

//     const submitform=(e)=>{
//         e.preventDefault();
//         console.log("form", form);
//     }
//     return<>
    
//      <form>
// <input onChange={handleData} name="username"  type="text" placeholder="enter your name"/>
//          <input onChange={handleData} name="age"  type="number" placeholder="enter your age"/>
        
//          <input onChange={handleData} name="address"  type="text" placeholder="enter your address"/>
//          <input ref={ref} onChange={handleData}  type="file"/>
//          <button onClick={submitform}>submit</button>
//      </form>
     

//     </>

// }
// export {Form}