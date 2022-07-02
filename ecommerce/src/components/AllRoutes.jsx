import React from "react"
import {Routes, Route} from "react-router-dom"
import { Cart } from "../pages/Cart"
import { Home } from "../pages/Home"
import { Product } from "../pages/Product"
import { Products } from "../pages/Products"

const AllRoutes= ()=>{
    return <>
   
   <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/products" element={<Products/>}></Route>
       <Route path="/products/:id" element={<Product/>}></Route>
       <Route path="/cart" element={<Cart/>}></Route>

   </Routes>

    </>
}
export {AllRoutes}