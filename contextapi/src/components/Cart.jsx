import React, {useContext} from "react";

import { CartContext } from "../context/Cart";


const Cart= ()=>{

    const {cart, updateCart}= useContext(CartContext);

    return <>

    <h1>Cart number is:  {cart} </h1>

    <button onClick={ updateCart} > cart update </button>
    </>
}
export {Cart}