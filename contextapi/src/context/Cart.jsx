import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children})=>{
    
const [cart,setCart]= useState(0);
    const updateCart= (value)=>{
        setCart(cart + value);
        console.log("cart", cart+value);
        console.log("cart workingt")

    }
    return<> 
          <CartContext.Provider value={{cart,updateCart }}>{children}</CartContext.Provider>
    </>
}
export {CartContextProvider}

