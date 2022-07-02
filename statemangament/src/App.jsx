import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"

import {Child2} from "./Components/Child2"
import {Child1} from "./Components/Child1"
import {Todo} from "./Components/Todo";
import {C1} from "./Components/Revise/C1"
import {C2} from "./Components/Revise/C2"




function App() {


  const [val,setVal]= useState("");
  const data= "anand"

  const dataHandling= (value)=>{
    console.log("value", value);
    setVal(value);
  }

  //for c1
  const data2=200;
  const [data3, SetData3]= useState(50);
  const getChild=(num)=>{
SetData3(num)
  }

  return<>



  <h1>parent</h1>
  <h2>data recvied from child 1 to parent  ;{val}</h2>
  
  <Child1 data={data} dataHandling={dataHandling}/>
  <Child2  value={val}  />

  <br/>

  <C1 value={data2} data={getChild} />
  <h4>data from c1: {data3}</h4>
  <C2 data={data3}></C2>
  
  </>

}

export default App;
