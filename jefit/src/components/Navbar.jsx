import { Flex, Spacer, Box, Image, Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <Flex alignItems="center" bg="#257cff" p={5} pl={30} pr={10} w={1350}>
      <Box w="20%">
        <Link to={"/"}>
          <Image
            src="https://www.jefit.com/wp/wp-content/uploads/2017/07/cropped-logo_155_40_white-120x31.png"
            alt="JEFIT"
          />
        </Link>
      </Box>
      <Spacer />
      <Box display="flex" gap={3} color="white" fontSize="xl" bg="transparent">
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bg="transparent"
            fontSize="xl"
            border="none"
            colorScheme="transparent"
            p={0}
          >
            Get Jefit App
          </MenuButton>
          <MenuList bg="blue" color="white" _expanded={{ color: "black" }}>
            <MenuItem
              as="a"
              href="https://apps.apple.com/app/apple-store/id449810000"
              colorScheme="blue"
              _hover={{ color: "black" }}
            >
              Wrokout App (iOS)
            </MenuItem>
            <MenuItem
              _hover={{ color: "black" }}
              as="a"
              href="https://play.google.com/store/apps/details?id=je.fit&referrer=utm_source%3Demail"
            >
              Wrokout App (Andriod)
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bg="transparent"
            fontSize="xl"
            border="none"
            colorScheme="transparent"
            p={0}
          >
            Wrokout Plans
          </MenuButton>
          <MenuList bg="blue" color="white" _expanded={{ color: "black" }}>
            <MenuItem
              as="a"
              href="https://www.jefit.com"
              colorScheme="blue"
              _hover={{ color: "black" }}
            >
              Pro-designed Plans
            </MenuItem>
            <MenuItem _hover={{ color: "black" }}>Create My Plan</MenuItem>
          </MenuList>
        </Menu>
        <Button
          bg="transparent"
          border="none"
          _hover={{ bg: "transparent" }}
          fontSize="xl"
        >
          <Link to="/Exercise">Exercise Guide</Link>
        </Button>
        <Button
          bg="transparent"
          border="none"
          _hover={{ bg: "transparent" }}
          fontSize="xl"
        >
          <Link to="/Blog">Blog</Link>
        </Button>
        <Button
          bg="transparent"
          border="none"
          _hover={{ bg: "transparent" }}
          fontSize="xl"
        >
          Coach
        </Button>
        <Button
          bg="transparent"
          border="none"
          _hover={{ bg: "transparent" }}
          fontSize="xl"
        >
          <Link to="/Elite">Elite</Link>
        </Button>
        <Button
          bg="transparent"
          border="none"
          _hover={{ bg: "transparent" }}
          fontSize="xl"
        >
          <Link to="../Pages/Login">Login</Link>
        </Button>
      </Box>
      <Spacer />

      <Box>
        <Button
          bg="white"
          color="#257cff"
          pl={35}
          pr={35}
          _hover={{ bg: "#184fa3", color: "white" }}
        >
          <Link to="../Pages/Signup">Sign Up</Link>
        </Button>
      </Box>
    </Flex>
  );
}
