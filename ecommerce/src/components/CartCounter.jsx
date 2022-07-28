import React from 'react'
import { Box } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchCart } from '../Redux/products/action';
const CartCounter= ()=>{

    const cart= useSelector(store=> store.ecommerceData.cart);
    const dispatch= useDispatch();

    useEffect(()=>{
        if(cart?.length===0){
            dispatch(fetchCart())
        }
    },[cart?.length, dispatch])
    return <>
       
       <Box 
       background="grey"
       textColor="white"
       borderRadius='50%'
       textAlign='center'
       width='20px'
       height='20px'
       paddingBottom='25px'
       position='absolute'
       right='0'
       top='0'
       >
        {cart?.length?cart.length:0}
       </Box>
    </>
}

export {CartCounter}