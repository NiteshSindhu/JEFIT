import { Box, Button, Flex, Text, Heading, Image } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

export default function ElitePage() {
  return (
    <Box bg="#f8fbfe" p={20}>
      <Heading textAlign="center">Plans that suit you best</Heading>
      <Flex mt={30} columnGap={20} color="gray" alignItems="flex-start">
        <Box
          boxShadow="rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
          borderRadius={15}
          p={10}
          w="30%"
        >
          <Text textAlign="center" fontSize="28px">
            Basic
          </Text>
          <Text textAlign="center">Freeads supported</Text>
          <Text textAlign="center">Flexible workout planner</Text>
          <Text textAlign="center">Top-notch log tracker</Text>
          <Text textAlign="center">1400+ exercises library</Text>
          <Text textAlign="center">Body stats tracking tools</Text>
          <Text textAlign="center">Support interval training</Text>
          <Button
            display="block"
            m="auto"
            bg="gray"
            color="white"
            _hover={{ bg: "gray" }}
          >
            Free Download
          </Button>
        </Box>
        <Box
          boxShadow="rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
          borderRadius={15}
          p={10}
          w="30%"
        >
          <Text textAlign="center" fontSize="28px">
            Elite Monthly
          </Text>
          <Text textAlign="center">
            $12.99per month
            <br />
            All BASIC plan features
            <br />
            No ads
            <br />
            Comprehensive training reports
            <br />
            Advanced tracking features
            <br />
            Compare records with friends
            <br />
            Exercise tips from JEFIT experts
            <br />
            Premium workout plans
            <br />
            More...
          </Text>
          <Button
            display="block"
            m="auto"
            bg="gray"
            color="white"
            _hover={{ bg: "gray" }}
            mb={2}
          >
            <Link to="../Pages/Checkout">Get Elite Now</Link>
          </Button>
          <Text textAlign="center">$12.99 billed / month</Text>
        </Box>
        <Box
          boxShadow="rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
          borderRadius={15}
          p={10}
          w="30%"
        >
          <Text textAlign="center" fontSize="28px">
            Elite Yearly
          </Text>
          <Text textAlign="center">
            $5.83per month
            <br />
            All BASIC plan features
            <br />
            No ads
            <br />
            Comprehensive training reports
            <br />
            Advanced tracking features
            <br />
            Compare records with friends
            <br />
            Exercise tips from JEFIT experts
            <br />
            Premium workout plans
            <br />
            More...
            <br />
            Save 55%
          </Text>
          <Button
            display="block"
            m="auto"
            bg="gray"
            color="white"
            _hover={{ bg: "gray" }}
            mb={2}
          >
            <NavLink to={"../Pages/Checkout"}>Get Elite Now</NavLink>
          </Button>
          <Text textAlign="center">$69.99 billed / year</Text>
        </Box>
      </Flex>
      <Box mt={40}>
        <Button
          bg="#00aeef "
          color="white"
          _hover={{ bg: "#00aeef" }}
          display="block"
          m="auto"
          mb={30}
        >
          <NavLink to={"../Pages/Checkout"}>
            SEND JEFIT ELITE MEMBERSHIP AS GIFT
          </NavLink>
        </Button>
        <Image src="/Images/img7.png" w="100%" />
      </Box>
      <Box mt={10} position="relative">
        <Image src="/Images/img8.png" w="100%" />
        <Button
          bg="#00aeef "
          color="white"
          border="1px solid #00aeef"
          position="absolute"
          top="68.9%"
          left="42.5%"
          px={25}
          py={30}
          fontSize={30}
          _hover={{ bg: "white", color: "black" }}
        >
          <NavLink to={"../Pages/Checkout"}>Get Elite </NavLink>
        </Button>
      </Box>
    </Box>
  );
}
