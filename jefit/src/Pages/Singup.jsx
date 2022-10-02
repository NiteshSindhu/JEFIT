import {
  Box,
  Heading,
  Spacer,
  Image,
  Flex,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Account } from "../Context/AuthContext";
import { useContext, useReducer, useRef } from "react";

let initialState = {
  username: "",
  email: "",
  password: "",
};
const render = (state, action) => {
  switch (action.type) {
    case "username":
      return { ...state, ln: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
export default function Singup() {
  const [state, dispatch] = useReducer(render, initialState);
  const ref = useRef("");
  const { SetData } = useContext(Account);
  function handledata() {
    SetData(state);
    ref.current.reset();
  }
  return (
    <Box
      w="100%"
      h="auto"
      pt="50px"
      pb="50px"
      bg="#d9e9f7 "
      boxSizing="border-box"
    >
      <Heading as="h1" color="white" textAlign="center">
        JEFIT
      </Heading>
      <br />

      <Box
        boxSizing="border-box"
        w="500px"
        h="auto"
        bg="#ebf7ff"
        margin="auto"
        mt="20px"
        p="15px"
        pt="40px"
        borderRadius={15}
      >
        <Heading as="h1" size="xl" textAlign="center" fontStyle="bold">
          CREATE AN ACCOUNT
        </Heading>
        <br />
        <Text textAlign="center" color="gray">
          Continue with
        </Text>
        <br />
        <Flex alignItems="center" w="50%" m="auto" spacing={30}>
          <Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius="10px">
            <Image
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              h="50px"
              bg="white"
              w="50px"
              borderRadius="10px"
            />
          </Box>
          <Spacer />
          <Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius="10px">
            <Image
              src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
              h="50px"
              bg="white"
              w="50px"
              borderRadius="10px"
            />
          </Box>
          <Spacer />
          <Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius="10px">
            <Image
              src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
              h="50px"
              bg="white"
              w="50px"
              borderRadius="10px"
            />
          </Box>
        </Flex>
        <br />
        <Text textAlign="center" color="gray">
          Or
        </Text>
        <br />
        <form isRequired ref={ref}>
          <label htmlFor="username">Username</label>
          <Input
            type="text"
            placeholder="Enter a username "
            bg="white"
            onChange={(e) =>
              dispatch({ type: "username", payload: `${e.target.value}` })
            }
          />
          <br />
          <br />
          <label htmlFor="email">Email Address</label>
          <Input
            type="email"
            placeholder="Enter your Email "
            bg="white"
            onChange={(e) =>
              dispatch({ type: "email", payload: `${e.target.value}` })
            }
          />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            placeholder="Password"
            bg="white"
            onChange={(e) =>
              dispatch({ type: "password", payload: `${e.target.value}` })
            }
          />
          <br />
          <br />
          <Text alignItems="center" color="red">
            Minimum 8 characters 1 number (0-9)
            <br />
            1 lowercase letter (a-z) 1 uppercase letter (A-Z)
            <br />1 special character (from standard US keyboard)
          </Text>
        </form>
        <br />
        <br />
        <Button
          w="100%"
          bg="#184cff"
          color="white"
          _hover={{ bg: "teal", color: "white" }}
          onClick={handledata}
        >
          CREATE ACCOUNT
        </Button>
        <br />
        <br />

        <Text textAlign="center">
          Already a member?{" "}
          <Text color="blue" display="inline-block" textDecoration="underline">
            <NavLink to="/Pages/Login">Sign in</NavLink>
          </Text>
        </Text>
        <br />
        <br />
        <Text textAlign="center">
          By signing up, you agree to the JEFIT Terms of Use and Privacy Policy.
          We respect and protect your information and privacy.
        </Text>
      </Box>
    </Box>
  );
}
