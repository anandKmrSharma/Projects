import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signin } from "../Redux/auth/actions";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useDispatch();

  const location= useLocation();

  const navigate= useNavigate();


  console.log("location", location)
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const authStatus = useSelector((store) => store.authReducer.auth);

  const handleUserEmailChange = (e) => {
    console.log(e.target.value);
    setUserEmail(e.target.value);
  };

  const handleUserPassword = (e) => {
    console.log(e.target.value);
    setUserPassword(e.target.value);
  };

  const submitHandler=(e)=>{
  e.preventDefault()
    console.log("submit", userEmail, userPassword);

    dispatch(signin({email:userEmail, password:userPassword}));

  }

  useEffect(()=>{
if(location?.state?.pathname && authStatus){
  navigate(location?.state?.pathname,{replace:true});
}

  },[location?.state, authStatus, navigate])

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={submitHandler}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input isRequired
                  type="email"
                  value={userEmail}
                  onChange={handleUserEmailChange}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input isRequired
                  onChange={handleUserPassword}
                  value={userPassword}
                  type="password"
                />
              </FormControl>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
        
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export { Login };
