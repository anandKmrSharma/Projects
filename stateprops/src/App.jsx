import logo from './logo.svg';
import './App.css';

import {Todo} from "./components/Todo"
import React from 'react';
import {useState} from "react";

function App() {

  const arr=["wake up", "standup", "work"];
  const [num, setNum]= useState(0);
  
    // if(num >10){
    //   setNum(0);
    // }

  const count= ()=>{
    setNum(num+1);
  }
  //conditional rendering
  if(num ===15){
    return <h1>reached max</h1>
  }
  
  return (
<>

<h1>home page</h1>

{
  arr.map((el)=>{
        return (
          <div>

<Todo num={el} age= {25} data1="123" data2= {[1,2,3,4,5,6]}/>
<Todo>
  <h3>children passing as a props</h3>
  <h4>children passing as a props second time</h4>

</Todo>
          </div>
        )
  })
}
<h1>counter : {num}</h1>
<p>counter is {num % 2===0? "even": "odd"}</p>
<button onClick={count}> add one</button>

{
  count<5 && (
    <div><button onClick={count}> add one</button></div>
  )
  

}

</>
    
  );
}

export default App;
