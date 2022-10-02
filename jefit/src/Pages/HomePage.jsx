import { Image, Flex, Spacer, Button, Text } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
export default function HomePage() {
  const [data, setdata] = useState([]);

  const fetchdata = () => {
    axios.get("http://localhost:3000/workout").then((res) => {
      setdata(res.data);
    });
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <Flex bg="#184fa3" w={1350}>
        <Box w="50%" color="white" fontWeight="bold" p={10}>
          <Heading as="h1" size="2xl" textAlign="left" lineHeight="60px">
            Magnage & TRACK
            <br />
            ALL YOUR WORKOUTS
            <br />
            IN ONE PLACE
          </Heading>
          <br />
          <Heading as="h5" size="lg" textAlign="left">
            #1 Popular Workout Tracking Platform Stay Strong Together
          </Heading>
          <Flex mt={10} width="85%">
            <Box>
              <a href="https://play.google.com/store/apps/details?id=je.fit&referrer=utm_source%3Demail">
                <Image
                  src="https://www.jefit.com/wp/wp-content/uploads/2021/11/googleplay.png.webp"
                  alt="google play"
                  mb={8}
                />
              </a>
              <a href="https://apps.apple.com/app/apple-store/id449810000">
                <Image src="https://www.jefit.com/wp/wp-content/uploads/2021/11/appstore.png.webp" />
              </a>
            </Box>
            <Spacer />
            <Box>
              <Image src="https://www.jefit.com/wp/wp-content/uploads/2021/11/qrcode_white.png.webp" />
            </Box>
          </Flex>
          <Flex gap={10} bg="transparent">
            <a href="https://www.instagram.com/jefitapp/">
              <Image
                src="https://toppng.com/uploads/preview/ew-instagram-logo-transparent-related-keywords-logo-instagram-vector-2017-115629178687gobkrzwak.png"
                h={10}
                w={10}
                borderRadius="50%"
                bg="transparent"
              />
            </a>
            <a href="https://www.facebook.com/jefitapp">
              <Image
                src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"
                h={10}
                w={10}
                borderRadius="50%"
                bg="transparent"
              />
            </a>
            <a href="https://twitter.com/jefitinc">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxl52CcLimgzKTqphsYmAbBogJZzK-hUkirA&usqp=CAU"
                h={10}
                w={10}
                borderRadius="50%"
              />
            </a>
          </Flex>
        </Box>
        <Box w="50%" p={10}>
          <Image
            src="https://www.jefit.com/wp/wp-content/uploads/2022/03/website_hero_watch.webp"
            w="100%"
            h="100%"
          />
        </Box>
      </Flex>
      <Box bg="#f8fbfe" w={1350} margin="auto" pt="50px" pb="40px">
        <Heading as="h3" textAlign="center">
          CONNECT WITH OVER 10 MILLION JEFIT MEMBERS
        </Heading>
        <Heading as="h4" size="sm" textAlign="center">
          As the most active workout community, we invite you and your friends
          to join us and support each other.
        </Heading>
        <Box
          display="flex"
          overflowX="hidden"
          w="90%"
          margin="auto"
          marginTop="20px"
          gap={10}
        >
          {data.map((elem) => (
            <Image src={elem.Image} />
          ))}
        </Box>
        <br />
        <br />
        <Button
          bg="#39b7ff"
          display="block"
          margin="auto"
          color="white"
          px={35}
          fontSize="25px"
          borderRadius="15px"
          _hover={{
            color: "#39b7ff",
            border: "2px solid #39b7ff",
            bg: "white",
          }}
        >
          JOIN NOW
        </Button>
      </Box>
      <Box bg="#f7f9fd">
        <Heading as="h1" size="xl" textAlign="center" pt="50px">
          JEFIT COVERS ALL OF YOUR WORKOUT NEEDS
        </Heading>
        <br />
        <br />
        <br />
        <Image src="/Images/img1.png" />
        <br />
        <br />
        <br />
        <Image src="/Images/img2.png" />
        <br />
        <br />
        <br />
        <Image src="/Images/img3.png" />
        <br />
        <br />
        <br />
      </Box>
      <br />
      <br />
      <Box pb={100}>
        <Heading as="h1" size="xl" textAlign="center" pt="50px">
          JEFIT COVERS ALL OF YOUR WORKOUT NEEDS
        </Heading>
        <br />
        <br />
        <br />
        <Flex width="80%" gap={10} margin="auto">
          <Box
            w="30%"
            py="40px"
            borderRadius={15}
            bg="#404040"
            color="white"
            px={30}
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/1828/1828961.png"
              w="50px"
              h="50px"
              p="10px"
              borderRadius="50%"
              bg="white"
            />
            <br />
            <br />
            <Heading as="h1" size="xl">
              FREE
            </Heading>
            <br />
            <br />
            <Heading as="h4" size="md" lineHeight={10}>
              Basic <br />
              Ads supported <br />
              Flexible workout planner <br />
              Top-notch log tracker <br />
              1400+ exercises library <br />
              Body stats tracking <br />
              tools <br />
              Support interval training
            </Heading>
            <br />
            <br />
            <Button
              bg="transparent"
              px={30}
              color="white"
              border="2px solid white"
              borderRadius={15}
              _hover={{ bg: "white", color: "teal" }}
            >
              <NavLink to="/Elite">Free Download</NavLink>
            </Button>
          </Box>
          <Box
            w="30%"
            py="40px"
            borderRadius={15}
            bg="#404040"
            color="white"
            px={30}
          >
            <Image
              src="https://svgsilh.com/svg/36050.svg"
              w="50px"
              h="50px"
              p="10px"
              borderRadius="50%"
              bg="white"
            />
            <br />
            <br />
            <Heading as="h1" size="xl">
              Elite Monthly
            </Heading>
            <br />
            <br />
            <Heading as="h4" size="md" lineHeight={10}>
              $12.99/month <br />
              All BASIC plan features <br />
              No ads <br />
              Comprehensive training <br /> reports <br />
              Advanced tracking <br />
              features <br />
              Compare records with <br />
              friends <br />
              Exercise tips from JEFIT <br />
              experts <br />
              Premium workout plans <br />
              More...
            </Heading>
            <br />
            <br />
            <Button
              bg="#39b7ff"
              px={30}
              color="white"
              borderRadius={15}
              _hover={{ bg: "white", color: "#39b7ff" }}
            >
              <NavLink to="/Elite"> LEARN MORE</NavLink>
            </Button>
            <br />
            <br />
            <Text color="gray" fontSize={20}>
              $12.99 billed / month
            </Text>
          </Box>
          <Box
            w="30%"
            py="40px"
            borderRadius={15}
            bg="#404040"
            color="white"
            px={30}
          >
            <Image
              src="https://toppng.com/uploads/preview/crown-icon-transparent-115495360711ic1xegtew.png"
              w="50px"
              h="50px"
              p="10px"
              borderRadius="50%"
              bg="white"
            />
            <br />
            <br />
            <Heading as="h1" size="xl">
              Elite Yearly
            </Heading>
            <br />
            <br />
            <Heading as="h4" size="md" lineHeight={10}>
              $5.83/month <br />
              All BASIC plan features <br />
              No ads <br />
              Comprehensive training <br /> reports <br />
              Advanced tracking <br />
              features <br />
              Compare records with <br />
              friends <br />
              Exercise tips from JEFIT <br />
              experts <br />
              Premium workout plans <br />
              More...
            </Heading>
            <br />
            <br />
            <Button
              bg="#39b7ff"
              px={30}
              color="white"
              borderRadius={15}
              _hover={{ bg: "white", color: "#39b7ff" }}
            >
              <NavLink to="/Elite"> LEARN MORE</NavLink>
            </Button>
            <br />
            <br />
            <Text color="gray" fontSize={24}>
              Save 55%, $69.99 billed / year
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box bg="#f8fbfe" py={100} px={20}>
        <Heading as="h1" size="2xl" textAlign="center" mb={10}>
          WANT TO BUILD YOUR OWN WORKOUT PLAN?
        </Heading>
        <Text textAlign="center" fontSize="2xl">
          Customize your workout plan with over 3000 free exercises in Jefit
          Workout Plan Builder. And easily share with friends.
        </Text>
        <Button
          bg="#39b7ff"
          m="auto"
          px={30}
          mt={30}
          fontSize="25px"
          display="block"
          color="white"
          borderRadius={15}
          _hover={{
            bg: "white",
            color: "#39b7ff",
            border: "2px solid #39b7ff",
          }}
        >
          CREATE WORKOUT PLAN
        </Button>
      </Box>
    </>
  );
}
