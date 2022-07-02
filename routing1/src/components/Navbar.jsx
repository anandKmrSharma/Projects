import React from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Navbar= ()=>{
const {id} = useParams();
    return <>
    <h1>Navbar page</h1>

<div style={{display: "flex", marginLeft:"30px"}}>
<div style={{marginLeft:"10px"}}>
    <Link to = "/">  home  </Link>
    </div>
    <div style={{marginLeft:"10px"}}>

    <Link to= "/product"> product</Link>
    </div>
    <div style={{marginLeft:"10px"}}>

    <Link to= "/login"> login</Link>
    </div>

    <h1>use params = {id}</h1>

</div>
    
    </>

}
export {Navbar}