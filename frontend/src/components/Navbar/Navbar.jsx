import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Box bg={"lightblue"} p="1rem 2rem">
      <Flex
        sx={{
          color: "#212121",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Heading as="h1">My Blog</Heading>
        <Flex gap="2rem">
          <NavLink to="/">
            <Text>Home</Text>
          </NavLink>
          <NavLink to="/login">
            <Text>Login</Text>
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  );
}
