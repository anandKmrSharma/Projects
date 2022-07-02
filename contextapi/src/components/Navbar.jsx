import React, {useContext} from "react";


import { ThemeContext } from "../context/ThemeContext";
const Navbar=()=>{
    const {theme, changeTheme}= useContext(ThemeContext)
    return <>
    <h1>navbar is :{theme} </h1>
    <button onClick={changeTheme}>changeTheme</button>
    </>
}
export {Navbar}





// import React from "react";
// import {Cart} from "./Cart"

// import { ThemeContext } from "../context/ThemeContext";
// import { useContext } from "react";

// const Navbar= ()=>{
// const {theme,themeChanege }= useContext(ThemeContext)

//     return <>

//     <h1>Navbar : them is :- {theme}</h1>
//     <button onClick={themeChanege} > change theme</button>

//     <Cart/>
//     </>
// }
// export {Navbar}