import React from "react";

const C1= ({value, data})=>{
    const num=500;
    data(num);
    return <>
    <h3>c1, data recevied from parent: {value.data2}</h3>
    </>
}
export {C1}