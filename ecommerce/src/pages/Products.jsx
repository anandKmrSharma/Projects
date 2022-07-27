import React, { useState } from "react";
import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import { FilterComponent } from "../components/FilterComponent";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox, CheckboxGroup, VStack} from "@chakra-ui/react";
import { useEffect } from "react";
import { fetchData } from "../Redux/products/action";
import { useSearchParams } from "react-router-dom";
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

import { ProductTemplate } from "./ProductTemplate";
const Products = () => {
  const products = useSelector((store) => store.ecommerceData.products);
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
                  <ProductSimple
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                  />
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

const ProductSimple=({image,price,title})=> {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'contain'}
            src={image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
            ₹{price}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}