import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useColorModeValue,
  Box,
  Button,
  useDisclosure,
  Flex,
  Image,
  Text
} from "@chakra-ui/react";

const Checkout = ({ cart, checkoutHandler }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Button
        onClick={onOpen}
        rounded={"none"}
        w={"full"}
        mt={8}
        size={"lg"}
        py={"7"}
        bg={useColorModeValue("gray.900", "gray.50")}
        color={useColorModeValue("white", "gray.900")}
        textTransform={"uppercase"}
        _hover={{
          transform: "translateY(2px)",
          boxShadow: "lg",
        }}
      >
        checkout
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>confirm purchase</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {cart.map((product) => {
              return (
                <Box key={product.id} mb="1rem">
                  <Flex>
                    <Box>
                      <Image
                        src={product.image}
                        objectFit={"contain"}
                        alt={"product image"}
                        boxSize={"100px"}
                        border={"1px solid red"}
                        rounded={"lg"}
                      />
                    </Box>
                    <Box maxW={"250px"} ml="1rem">
                      <Text fontSize={"lg"}>{product.title}</Text>
                    </Box>
                  </Flex>
                </Box>
              );
            })}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={checkoutHandler}>
              Confirm
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export { Checkout };
