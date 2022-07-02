
import React, { useState, useEffect } from "react"

const Todo= ()=>{
    const [text, setText]= useState("");
    const [todos,setTodos]= useState([]);
    const [page, setPage]= useState(1);
console.log("page",page);


    useEffect(()=>{
    getData();
    },[page])

    const getData=()=>{
          fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`) 
        //   fetch("http://localhost:3001/todos") 

          .then(d=> d.json())
          .then((res)=>{ setTodos(res) })
    }

    const changeData= (e)=>{
        console.log(e.target.value)
        setText(e.target.value);
    }
    const dataAppend= ()=>{
        // console.log("text", text);
        // setTodos([...todos, text]);
const payload={
    task:text,
    status: false
}  
        fetch("http://localhost:3001/todos", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "content-type": "application/json"
            }  
        })
        .then(()=>{
            getData()
        })
        setText("");
             
    }

return<>
<h2>To do list</h2>

<input
 type="text"
 value={text}
 placeholder="enter todo list"
 onChange= {changeData}
/>
<button onClick={dataAppend}>add</button>


{todos.map((e)=> (
    <h3>{e.task}</h3>
))}
<button disabled={page===1} onClick={  ()=>{setPage(page-1) }} >prev</button>
<button disabled={todos.length<3} onClick={  ()=>{setPage(page+1) }}>next</button>

</>
}   
export {Todo}




















// import React, {useState, useEffect} from "react";

// const Todo= ()=>{
//     const [text, setText] = useState("");
//     const [todos, setTodos] = useState([]);
//     const[page,setPage]= useState(1)

// //     const pageChange= (val)=>{
// //         setPage(page+val);
// //    }
//     useEffect(()=>{
//         getTodo()
//     },[page])
// console.log("pages", page)
    
//     //get data from json
//     const getTodo=()=>{  
//         fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`)   
//         .then (d=> d.json())
//         .then((res)=>{
//             setTodos(res)
//         })  
//    }

//    const changeData=(e)=>{
//        setText(e.target.value)
//     }
//    //sending the data in json server
//     const addTodo=()=>{  

//         //setting payload
//          const payload={
//              title: text,
//              status: false
//          }
         
//          //fetching server and posting the data
//          fetch("http://localhost:3001/todos", {
//              method: "POST",
//              body: JSON.stringify(payload),
//              headers:{
//                  "content-type": "application/json"
//              }
//          } ).then(()=>{ //calling get data agin to reflect in ui
//              getTodo();
//              setText("");
//          })
//     }
//     return <>
    
//     <input
//        type="text"
//     value ={text}
//     placeholder="enter task"
//     onChange={changeData}
//     />
//     <button onClick={ addTodo}>Add</button>

    
//         {
//            todos.map((e)=> (
//                <div>{e.title}</div>
//            ))
//         }
        
//         <button disabled={page===1} onClick={ ()=>{setPage(page-1)}}>prev</button>
//         <button disabled={todos.length<3} onClick={()=>{setPage(page+1)}}>next</button>
        

    

//     </>
// }
// export {Todo}