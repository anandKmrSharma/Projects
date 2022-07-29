import React from "react";

import { Box, Heading, Stack, Image, Text, useColorModeValue, Button } from "@chakra-ui/react";
import {DeleteIcon} from "@chakra-ui/icons"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteProductCart,addOrder } from "../Redux/products/action";
import { useEffect } from "react";

import{Checkout} from "../components/Checkout"
const Cart = () => {
const dispatch= useDispatch();
const cart= useSelector(store=> store.ecommerceData.cart);


    const removeProduct=(id)=>{
        dispatch(deleteProductCart(id))
        console.log("going to remove id", id);
    }

    const checkoutHandler=()=>{
      dispatch(addOrder(cart))
    }
   

  return (
    <>

      <Box>
        <Heading as="h2" size="xl" textAlign="center">
          cart
        </Heading>

      {cart?.length && cart.map((product)=>(

             <CartItem title={product.title} 
             id={product.id}
             key={product.id}
             description={product.description}
              price={product.price} 
              image={product.image}
              removeProduct={removeProduct}
             />
      ))}
        
        
        <Checkout cart={cart} checkoutHandler={checkoutHandler}/>
      </Box>
    </>
  );

  function CartItem({title,id,removeProduct,image,description,price}) {
    return (
      <Box
        border={"1px solid red"}
        rounded="lg"
        width="fit-content"
        margin={"auto"}
        marginBottom={"2rem"}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width={"300px"}
            height={"300px"}
    
            position={"relative"}
            padding="0 1rem"
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "80%",
              h: "80%",
              pos: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundImage: `url(${image})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
          >
            <Image
              rounded={"lg"}
              height={300}
              width={300}
              objectFit={"contain"}
              src={
                image
              }
            />
          </Box>
          <Box width={"300px"} height={"300px"} >
            <Stack p={2}>
              <Heading as="h3" size="lg">
                <Text>{title}</Text>
              </Heading>
               <Box overflow={"hidden"} whiteSpace="nowrap" >
               <Text>{description}</Text>
               </Box>
              
                  <Text
                   color={useColorModeValue('gray.900', 'gray.400')}
                   fontWeight={300}
                   fontSize={'2xl'}>
                   {price}
                  </Text>
                  <Button variant={"solid"} leftIcon={<DeleteIcon/>}
                  
                  onClick={()=>removeProduct(id)}
                  >remove</Button>

            </Stack>
          </Box>
        </Stack>
      </Box>
      
    );
  }

};
export { Cart };
