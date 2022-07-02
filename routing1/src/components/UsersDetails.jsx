import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

const UsersDetails= ()=>{
    const {id} = useParams();
    const [user, setUser] = useState([]);

    useEffect(()=>{
        getData();
    },[user])

const getData= ()=>{
    fetch(`https://reqres.in/api/users/${id}`)
    .then(d=> d.json())
    .then((res)=>{setUser(res.data)})      
}

// if(true){
//     return 
//     <Navigate to={"/login"} />
// }

    return <>

     <h1>users  {id} details are below </h1>
     
         
             <h1>{user.first_name}</h1>
             <img src={user.avatar} alt="img"/>
        
         
     
     
    </>
}
export {UsersDetails}