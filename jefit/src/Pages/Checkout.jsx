import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Heading,
  Input,
  Divider,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
// import { useState } from "react";

export default function Checkout() {
  // const [btn, setBtn] = useState(false);
  const OnClick = () => {};
  return (
    <Box>
      <Box boxShadow="rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" p={5} pl={28}>
        <NavLink to={"/"}>
          <Image src="https://www.jefit.com/images/logo_155_40.png" />
        </NavLink>
      </Box>
      <Flex
        bg="#2196f3"
        h="60px"
        alignItems="center"
        justifyContent="center"
        mt={20}
      >
        <Image
          src="https://previews.123rf.com/images/chizhiq/chizhiq1908/chizhiq190800954/128283489-dollar-sign-icon-currency-sign-money-symbol-vector-cash-illustration-thin-line-pictogram-outline-edi.jpg?fj=1"
          w={10}
          h={10}
          borderRadius="50%"
        />
        <Box pl={10}>
          <Text color="white">GET JEFIT ELITE</Text>
          <Text color="whiteAlpha.700" fontSize={12}>
            Save 55% with 12 Months
          </Text>
        </Box>
      </Flex>
      <Box pl={28} mt={10}>
        <Heading fontSize={16}>SELECT ELITE OPTION</Heading>
        <Flex mt={4} gap={2} w="90%">
          <Button p={10} h="fit-content" w="50%">
            <Text fontSize={18}>
              NO COMMITMENT
              <br />1 Month
              <br />
              $12.99/month
              <br />
              billed monthly
            </Text>
          </Button>
          <Button
            p={10}
            h="fit-content"
            display="inline-block"
            w="50%"
            _active={{ bg: "#2196f3", color: "white" }}
            onClick={OnClick}
          >
            <Text
              bg="green"
              color="white"
              w="fit-content"
              ml="35%"
              fontSize={14}
            >
              POPULAR-SAVE 55%
            </Text>
            <Text fontSize={18} textAlign="center">
              12 Months
              <br />
              $5.83/month
              <br />
              billed annually
            </Text>
          </Button>
        </Flex>
      </Box>
      <Flex>
        <Box w="70%" pl={28} mt={10}>
          <Heading fontSize={16}>ENTER PAYMENT INFORMATION</Heading>
          <Box
            bg="white"
            w="80%"
            p={20}
            mt={10}
            boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          >
            <Input type="number" placeholder="Card Number" w="400px" />
            <br />
            <br />
            <Input
              type="date"
              placeholder="Expiration"
              display="inline-block"
              w="195px"
              mr={5}
            />
            <Input
              type="number"
              placeholder="CVC"
              display="inline-block"
              w="190px"
            />
            <br />
            <br />
            <Input type="text" placeholder="Address" w="400px" />
            <br />
            <br />
            <Input
              type="text"
              placeholder="City"
              display="inline-block"
              w="190px"
              mr={4}
            />
            <Input
              type="text"
              placeholder="State"
              display="inline-block"
              w="90px"
              mr={4}
            />
            <Input
              type="number"
              placeholder="ZIP"
              display="inline-block"
              w="90px"
            />
            <br />
            <br />
            <Button
              w="400px"
              bg="#2196f3"
              color="white"
              _hover={{ bg: "#2196f3", color: "white" }}
            >
              CONFIRM PURCHASE
            </Button>
          </Box>
        </Box>
        <Box
          boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          w="20%"
          h="fit-content"
          p={10}
          mt={10}
        >
          <Heading fontSize={18} mb={5}>
            ORDER SUMMARY
          </Heading>
          <Divider mb={5} />
          <Text>Plan-</Text>
          <Text>Total-</Text>
        </Box>
      </Flex>
      <Flex
        bg="#2196f3"
        w="100%"
        h="60px"
        mt={30}
        color="white"
        fontSize={20}
        justifyContent="center"
        alignItems="center"
      >
        CANCEL ANYTIME
      </Flex>
    </Box>
  );
}
