import React from 'react'
import{Box, 
    Heading
}
from '@chakra-ui/react'
import {useSelector, useDispatch}  from "react-redux"
import { useEffect } from 'react'
import { fetchOrders } from '../Redux/products/action'
import { ProductSimple } from '../components/ProductSimple'

const Orders=()=>{

    const orders= useSelector(store=> store.ecommerceData.orders)
    console.log("orders data", orders);

    const dispatch = useDispatch()

    useEffect(()=>{

        dispatch(fetchOrders())

        },[dispatch]) 


    return<>
    

<Box>
    <Heading as="h2" size={"xl"} textAlign="center"> Your orders</Heading>
</Box>

<Box>
    {orders.map((product)=>{
        return (
            <ProductSimple
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />

        )
    })}
</Box>
    </>
}

export {Orders}