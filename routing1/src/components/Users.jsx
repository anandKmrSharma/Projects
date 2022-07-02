import React from "react";
import { Link } from "react-router-dom";

const Users= ()=>{
    return <>
    <h1>Users details are here:-</h1>

<div style={{display: "grid"}}>

    <Link to={`/users/1`}> user1</Link>
    <Link to={`/users/2`}> user2</Link>
    <Link to={`/users/3`}> user3</Link>
    <Link to={`/users/4`}> user4</Link>
    <Link to={`/users/5`}> user5</Link>
    
</div>
   
    </>
}
export {Users};