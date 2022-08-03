import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Flex,
    Avatar,
    Box,
    Link

  } from '@chakra-ui/react'
const Profile = () => {
  return (
    <>
      <Flex>
        <Menu>
          <MenuButton 
          as={Button}
          rounded="full"
          variant="link"
          cursor="pointer"
          minW={0}
          >
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
          </MenuButton>
          <MenuList zIndex={10000}>
          <MenuItem>cart</MenuItem>

  
          
          <MenuItem>your orders</MenuItem>

            
            <MenuItem>Log in</MenuItem>
            <MenuItem>Log out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};

export { Profile };
