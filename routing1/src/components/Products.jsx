import React from "react";
 import { useParams } from "react-router-dom";
const Products= ()=>{

    const {value} = useParams();
    console.log("id", value)
    return <>
    <h1>Product page</h1>
    <h2>params value= {value}</h2>
    </>

}
export {Products}