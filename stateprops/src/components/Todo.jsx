import React from "react";
import "./todo.css"
const Todo= ({num, age, children})=>{

return (
    <>
        <h2 className="todo"> 1. {num} age: {age}</h2> 
        <h3 className="heading">{children}</h3>
    </>
)
}

export {Todo};