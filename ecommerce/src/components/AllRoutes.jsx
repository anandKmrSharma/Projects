import React from "react"
import {Routes, Route} from "react-router-dom"
import { Cart } from "../pages/Cart"
import { Home } from "../pages/Home"
import { Product } from "../pages/Product"
import { Products } from "../pages/Products"
import { Orders } from "../pages/Orders"
import { Login } from "../pages/Login"
import { AuthWrappers } from "./AuthWrappers"
const AllRoutes= ()=>{
    return <>
   
   <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/products" element={<Products/>}></Route>
       <Route path="/products/:id" element={<Product/>}></Route>
       <Route path="/cart" element={
        <AuthWrappers><Cart/></AuthWrappers>
       
       }></Route>
       <Route path="/orders" element={<Orders/>}></Route>
       <Route path="/login" element={<Login/>}></Route>

   </Routes>

    </>
}
export {AllRoutes}