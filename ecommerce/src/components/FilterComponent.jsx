import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { fetchData } from "../Redux/products/action";
import {useSearchParams} from "react-router-dom"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
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
    Checkbox,
    VStack,
    CheckboxGroup
  } from "@chakra-ui/react";

const FilterComponent = () => {

    const [searchParams, setSearchParams]= useSearchParams();
    console.log("serach", searchParams)

const dispatch= useDispatch();
  const [categoryValues, setCategoryValues] = useState(
    searchParams.getAll("category") || []);


  const categoryHandler = (values) => {
    console.log("working", values);
    setCategoryValues(values);
  };


  useEffect(()=>{
    if(categoryValues){
      setSearchParams({category: categoryValues});
      let params= {
        category: searchParams.getAll('category')
      }
             dispatch(fetchData(params))
    }
  }, [categoryValues, searchParams, setSearchParams,dispatch])





  

  return (
    <>
      <Box>
        <Box display={{ base: "none", md: "block" }} p="1 rem 2 rem">
          <Text fontSize="2xl">Filter</Text>
          <Text fontSize="2xl">Category</Text>
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
      </Box>
    </>
  );
};
export { FilterComponent };
