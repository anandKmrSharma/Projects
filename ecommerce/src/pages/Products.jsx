import React, { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
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
  // for url link
  const [searchParams, setSearchParam]= useSearchParams();
  console.log("serach", searchParams)
  console.log("products", products);

  // for storing the change value
  const [categoryValues, setCategoryValues] = useState(
    searchParams.getAll("category") || []
  );

  const categoryHandler = (value) => {
    console.log("working", value);
    setCategoryValues(value);
  };
  const dispatch = useDispatch();

  useEffect(()=>{
    if(categoryValues){
      setSearchParam({category: categoryValues})
      let params= {
        category: searchParams.getAll("category")
      }
             dispatch(fetchData(params))
    }
  }, [categoryValues, searchParams, setSearchParam,dispatch])
  useEffect(() => {
    if (products?.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch, products?.length]);
  return (
    <>
      <Box>
        <Stack display={{ md: "flex" }} flexDirection={{ md: "row" }}>
          <Box display={{ base: "none", md: "block" }} p="1 rem 2 rem">
            <Text fontSize="3xl"> Filter</Text>
            <Text fontSize="2xl"> Category</Text>
            <CheckboxGroup
              colorScheme="green"
              defaultValue={categoryValues}
              onChange={categoryHandler}
            >
              <VStack
                alignItems={"baseline"}
                spacing={[1, 5]}
                direction={["column", "row"]}
              >
                <Checkbox value="Womens clothing">Women's clothing</Checkbox>
                <Checkbox value="mens clothing">Men's clothing</Checkbox>
                <Checkbox value="jwellery">Jwellery</Checkbox>
                <Checkbox value="electronices">Electronic</Checkbox>
                <Checkbox value="bags">Bags</Checkbox>
              </VStack>
            </CheckboxGroup>
          </Box>

          <Box display={{base: "block", md:"none"}} p="0rem 2rem">
            <Menu closeOnSelect={false}>
              <MenuButton as={Button} colorScheme="blue">
                MenuItem
              </MenuButton>
              <MenuList minWidth="240px">
                <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
                  <MenuItemOption value="asc">Ascending</MenuItemOption>
                  <MenuItemOption value="desc">Descending</MenuItemOption>
                </MenuOptionGroup>
                <MenuDivider />
                <MenuOptionGroup title="Country" type="checkbox">
                  <MenuItemOption value="email">Email</MenuItemOption>
                  <MenuItemOption value="phone">Phone</MenuItemOption>
                  <MenuItemOption value="country">Country</MenuItemOption>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </Box>

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
