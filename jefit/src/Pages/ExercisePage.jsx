import {
  Box,
  Button,
  Heading,
  GridItem,
  Image,
  Text,
  Grid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ExercisePage() {
  const [data, setdata] = useState([]);

  const fetchdata = () => {
    axios.get("https://blooming-waters-42258.herokuapp.com/exercise").then((res) => {
      setdata(res.data);
    });
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <Box p={20}>
      <Heading textAlign="center">Exercises By Muscle Group</Heading>
      <Text textAlign="center">
        Find exercises that work out the muscle groups you're targeting.
      </Text>
      <Image src="/Images/img9.png" m="auto" />
      <Button
        bg="#2190c7"
        color="white"
        _hover={{ bg: "#2190c7" }}
        display="block"
        m="auto"
        mt={5}
        mb={10}
      >
        <Link to="/Pages/AllExercisePage">View All Exercises</Link>
      </Button>
      <Box>
        <Heading textAlign="center">Try Something New</Heading>
        <Text ml="20%" mt={5}>
          Change up your routine with one of these exerciese!
        </Text>
        <Grid templateColumns="repeat(6, 1fr)" gap={6} mt={20}>
          {data.map((elemt) => (
            <GridItem
              key={elemt.id}
              boxShadow=" rgba(149, 157, 165, 0.2) 0px 8px 24px"
              p={2}
              borderRadius={5}
            >
              <Image src={elemt.url} w="100%" borderTopRadius={5} />
              <Text textAlign="center" color="blue">
                {elemt.exname}
              </Text>
              <Text textAlign="center">{elemt.title}</Text>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
