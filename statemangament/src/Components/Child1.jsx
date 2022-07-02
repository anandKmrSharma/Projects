import React from "react";


const Child1= ({data, dataHandling})=>{
    
 const name="Anand kumar sharma"
 dataHandling(name);

    return <>

    <h2>child1, recevide from parent: {data}</h2>
    </>
}

export {Child1};