import React from 'react';


const SecondPage=()=>{
    return(
        <>
        
        <h1>Second page</h1>
<div className='input-box'>
    <p style={{ marginBottom:"0px", color:"green" } }>Enter your residence</p>
    <input type="text" placeholder=''/>

    <p style={{ marginBottom:"0px", color:"green" } } >Address</p>
    <input type="text" placeholder=''/>
    <p style={{ marginBottom:"0px", color:"green" } } >Enter pin code</p>
    <input type="number" placeholder=''/>

</div>
<button>Submit</button>

        </>
    )
}

export default SecondPage;