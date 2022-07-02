import React,{useState} from "react";

const Todoinput=({getData, delet})=>{
const [data, setData]= useState("")

    const grabData=(e)=>{
        console.log("grab data working", e.target.value);
        setData(e.target.value);
        
    }

    const removeData = ()=>{

    }
    
    const showData= ()=>{
        console.log("show data working", {data})
           getData(data);
    }
      return<>
         <input placeholder="enter task" onChange={grabData} />
         <button onClick={showData}>add task</button>
         

      </>
}
export {Todoinput}