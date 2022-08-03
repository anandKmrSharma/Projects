import React, { useState } from "react";
import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import { FilterComponent } from "../components/FilterComponent";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox, CheckboxGroup, VStack} from "@chakra-ui/react";
import { useEffect } from "react";
import { fetchData } from "../Redux/products/action";
import { Link, useSearchParams } from "react-router-dom";
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

import {
  Center,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import{Link as RouterLink} from 'react-router-dom'

import { useNavigate } from "react-router-dom";

import { ProductTemplate } from "./ProductTemplate";
import { ProductSimple } from "../components/ProductSimple";
const Products = () => {
  const products = useSelector((store) => store.ecommerceData.products);
  console.log("products", products);
const [searchParams]= useSearchParams();
  // for storing the change value

  const dispatch = useDispatch();

  useEffect(() => {
    if (products?.length === 0) {
   let params={
    category:searchParams.getAll('category')
   }

      dispatch(fetchData());
    }
  }, [dispatch, products?.length], searchParams);
  console.log("products", products);


  const navigate= useNavigate();
  const navigateProduct=(id)=>{
    console.log("working navigate", id)
    navigate(`/products/${id}`)
  }

  return (
    <>
      <Box>
        <Stack display={{ md: "flex" }} flexDirection={{ md: "row" }}>
          <Box minWidth="15rem">
            <FilterComponent />
          </Box>
          <Box>
            <Heading as="h3">Products</Heading>
            <Flex flexWrap="wrap" justifyContent="space-around">
              {products.map((product) => {
                return (
                   
            //  <Link as={RouterLink} to='/products/'>
            <Box onClick={()=>{navigateProduct(product.id)}}>
                  <ProductSimple
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                  />
                     
                      </Box>
                );
                
              })}
            </Flex>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export { Products };
