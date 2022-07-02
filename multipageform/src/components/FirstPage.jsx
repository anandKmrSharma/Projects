import React from 'react';

const FirstPage=(props)=>{


    return(
        <>
        <h1>Multi page react, first page props : {props.name }{props.add} </h1>
<div className='input-box'>
    <p style={{ marginBottom:"0px", color:"green" } }>Enter your name</p>
    <input type="text" placeholder=''/>

    <p style={{ marginBottom:"0px", color:"green" } } >Enter your date of birth</p>
    <input type="text" placeholder=''/>
    <p style={{ marginBottom:"0px", color:"green" } } >Enter your age </p>
    <input type="number" placeholder=''/>

</div>
<button>Next</button>

        </>
    )
}

export default FirstPage; 