import React, { useEffect, useState } from 'react';
import './App.css';

function Hooksapi() {

    const [users,setUsers]= useState();
const getUsers= async ()=>{
    const response=  await fetch('https://api.github.com/users');
    const setUsers= await response.json();

}
    useEffect( ()=>{
    getUsers();
    },[]);

  return (
    <>
       <h1>git users detals:-</h1>

       {users.map( (el)=>{
           
       })
       
       }


    <div className='main'>
    <div className='mini'></div>
    <div className='mini'></div>
     <div className='mini'></div>
    </div>
    </>
  );
}

export default Hooksapi;
