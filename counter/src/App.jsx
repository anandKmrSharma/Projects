import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import React from 'react'
const Todo= ()=> {

  const [count, setCount]= useState(10);
  const Incr= ()=>{
    if(count <10){
    setCount(count+1);
    }else{
      alert("Reached maximum limit")
    }
    
  }
  const Decr= ()=>{
    if(count >0){
      setCount(count-1);
      }else{
        alert("Reached minimum limit")
      }
  }

  return (
  <>
  <h1>Counter</h1>

  <div className="main_div">
  <div className="center_div">
    <h1>{count}</h1>
    <div className='btn_div'>
      <button onClick={Incr}>increment</button>
      <button onClick={Decr}>decrement</button>
    </div>
  </div>
  </div>
  </>
  );
}

export default Todo;
