import React,{useContext} from "react";
import { ThemeContext } from "../context/ThemeContext";
const Body= ()=>{
    
const {themeChanege }= useContext(ThemeContext)

    return <>
    <h1>Body</h1>
    <button >cart update </button>
    <button onClick={themeChanege} > change theme in body</button>

    </>
}

export {Body}