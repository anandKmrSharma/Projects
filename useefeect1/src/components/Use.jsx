import React, {useState, useEffect} from "react";

const Use= ()=>{

    console.log("before")
    useEffect(()=>{
        console.log("first")
    })
    useEffect(()=>{
        console.log("second")
    })
    useEffect(()=>{
        console.log("third")
    },[])
    console.log("after")

    const [counter, setCounter]= useState(0)
    const increse= ()=>{
           setCounter(counter+1);
    }
return<>

<h3>
    counter = {counter}
    <button onClick={increse}>add</button>
</h3>
</>
}
export {Use}