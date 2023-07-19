import React from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Spacer,
  Link,
  Button,
  extendTheme,
} from "@chakra-ui/react";

// Import your logo image here
import Logo from "../Routes/sitelogo.png ";

function Navigation() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="blue.500"
      color="white"
    >
      <Box d="flex" alignItems="center">
        {/* Replace 'Logo' with your actual logo image */}
        <img src={Logo} alt="Logo" width="50" height="50" />
      </Box>

      <Spacer />

      <Box d="flex" alignItems="center" fontSize="lg">
        <Link href="#" mr={4}>
          Teachers
        </Link>
        <Link href="#" mr={4}>
          Courses
        </Link>
        <Link href="#" mr={4}>
          Pricing
        </Link>
        <Link href="#" mr={4}>
          About Us
        </Link>
        <Button colorScheme="teal" mr={4}>
          Sign In
        </Button>
        <Button colorScheme="teal">Sign Up</Button>
      </Box>
    </Flex>
  );
}
export default Navigation;
