import React, { useEffect, useState } from 'react';

const Data= ()=>{
const [user, setUser]= useState([]);

useEffect(()=>{
    getData();
},[])
console.log("users before", user)

    const getData=()=>{
        fetch(`https://reqres.in/api/users`)
        .then(d=> d.json())
        // .then((res)=>{console.log("res", res[1].id)})
        .then( (res)=>{setUser(res.data)} )
    }
   console.log("users", user)
return<>
<h3>data of user are here</h3>

{user.map((e)=>{
    <div>
 <h1>{e.first_name}</h1>
       <img src={e.avatar} alt="img"/>
    </div>
      
})
    
}

        

</>
}
export {Data}