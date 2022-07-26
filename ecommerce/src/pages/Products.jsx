import React, { useState } from "react";
import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import { FilterComponent } from "../components/FilterComponent";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox, CheckboxGroup, VStack, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { fetchData } from "../Redux/products/action";
import {useSearchParams} from "react-router-dom"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  Button,
  Flex,
  MenuOptionGroup,
  MenuDivider, 
} from "@chakra-ui/react";
import { ProductTemplate } from "./ProductTemplate";
const Products = () => {
  const products = useSelector((store) => store.ecommerceData.products);
  
  

  // for storing the change value
  
  const dispatch = useDispatch();

  
  useEffect(() => {
    if (products?.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch, products?.length]);
  console.log("products", products);

  return (
    <>
      <Box>
        <Stack display={{ md: "flex" }} flexDirection={{ md: "row" }}>
          

          
            
          

          <Box>
            <Heading as='h3'>Products</Heading>
            <Flex flexWrap="wrap" justifyContent="space-around">
            {
              products.map((pro)=>{

                return (
                  <ProductTemplate
                  key={pro.id}
                  image={pro.image}
                  title={pro.title}
                  price={pro.price}
                  />
                )
              })
            }
            </Flex>
          
          </Box>
        </Stack>
      </Box>
    </>
  );
};




export { Products };
