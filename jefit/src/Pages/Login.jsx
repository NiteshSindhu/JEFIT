import {
  Button,
  Box,
  Input,
  Heading,
  Divider,
  Spacer,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Checkbox, Image } from "@chakra-ui/react";
import { NavLink, Navigate } from "react-router-dom";
import { useContext, useReducer, useRef } from "react";
import { Account } from "../Context/AuthContext";
let initialState = {
  email: "",
  password: "",
};
const render = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
export default function Login() {
  const [state, dispatch] = useReducer(render, initialState);
  const { checkdata, islogin } = useContext(Account);
  const ref = useRef("");
  if (islogin) return <Navigate to={"/"} />;
  return (
    <Box
      backgroundImage="url('https://c4.wallpaperflare.com/wallpaper/787/610/414/muscle-press-pose-athlete-workout-hd-wallpaper-preview.jpg')"
      w="100%"
      height="auto"
      pt="40px"
      pb="50px"
    >
      <Heading as="h1" color="white" textAlign="center">
        JEFIT
      </Heading>
      <Box
        w="500px"
        h="auto"
        bg="#cae7f9"
        margin="auto"
        mt="20px"
        p="15px"
        pt="40px"
        // lineHeight="30px"
        borderRadius={15}
      >
        <Heading as="h1" size="xl" textAlign="center" fontStyle="bold">
          LOG IN
        </Heading>
        <form ref={ref}>
          <label htmlFor="username">Email</label>

          <Input
            type="email"
            placeholder=" email"
            bg="white"
            onChange={(e) =>
              dispatch({ type: "email", payload: `${e.target.value}` })
            }
          />
          <Divider />
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
        </form>
        <Divider />
        <br />
        <Flex alignItems="center">
          <Checkbox defaultChecked colorScheme="blue" spacing={3}>
            Remember Me
          </Checkbox>

          <Spacer />
          <Text color="blue" display="inline-block" textDecoration="underline">
            <NavLink to="/Pages/Login">Forgot Password</NavLink>
          </Text>
        </Flex>
        <Divider />
        <br />
        <Button
          w="100%"
          bg="#184cff"
          color="white"
          _hover={{ bg: "teal", color: "white" }}
          onClick={() => checkdata(state)}
        >
          LOG IN
        </Button>
        <Divider />
        <br />
        <Text textAlign="center" color="gray">
          Or continue with
        </Text>
        <Divider />
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
        <br />
        <Text textAlign="center">
          New to JETFIT?{" "}
          <Text color="blue" display="inline-block" textDecoration="underline">
            <NavLink to="/Pages/Signup">Create an account</NavLink>
          </Text>
          .
        </Text>
      </Box>
    </Box>
  );
}
