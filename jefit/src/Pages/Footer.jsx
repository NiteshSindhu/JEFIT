import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { Link, Navigate, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <Box bgGradient="linear(#FBFBFB,#FCFCFC)" p={10} pl={20} pr={40}>
      <Flex gap={20}>
        <Box w="20%">
          <Heading size="md">Products</Heading>
          <br />

          <NavLink to="/Elite">Elite Membership</NavLink>
          <Text>Coach</Text>
          <NavLink to="/Pages/Signup">Signup</NavLink>
          <br />
          <NavLink to="/Pages/Login">Login</NavLink>
        </Box>
        <Box w="20%">
          <Heading size="md">Resource</Heading>
          <br />
          <Text>Workout Plans</Text>
          <Text>Exercises Database</Text>
          <Text>Help Center</Text>
        </Box>
        <Box w="20%">
          <Heading size="md">Legal Press</Heading>
          <br />
          <Text>Privacy Policy</Text>
          <a href="https://www.jefit.com/terms-of-use">Terms of Use</a>
          <Text>IP / DMCA Notices</Text>
          <Text>Press & Media</Text>
        </Box>
        <Box w="20%">
          <Heading size="md">Follow US</Heading>
          <br />
          <NavLink to="/Blog">Blog</NavLink>
          <br />
          <a href="https://www.facebook.com/jefitapp">Facebook</a>
          <br />
          <a href="https://twitter.com/jefitinc">Twitter</a>
          <br />
          <a href="https://www.instagram.com/jefitapp/">Instagram</a>
          <br />
        </Box>
      </Flex>
      <Text textAlign="center" mt={20}>
        Copyright © 2010 - 2022 Jefit, Inc.
        <br />
        All Rights Reserved.
      </Text>
    </Box>
  );
}
