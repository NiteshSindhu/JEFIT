import {
  Box,
  Image,
  Heading,
  Flex,
  Text,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";


export default function AllExercisePage() {
  const [data, setdata] = useState([]);
  const [page, setPage] = useState(1);
  const fetchdata = (page) => {
    axios
      .get(`https://blooming-waters-42258.herokuapp.com/database?_limit=5&_page=${page}`)
      .then((res) => {
        setdata(res.data);
      });
  };
  useEffect(() => {
    fetchdata(page);
  }, [page]);
  return (
    <Box>
      <Heading borderBottom="1px solid">All Exercise Database</Heading>
      {data &&
        data.map((elem) => (
          <Flex
            key={elem.id}
            h="150px"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            mb={5}
            mt={10}
            alignItems="center"
          >
            <Flex h="150px" gap={6}>
              <Image src={elem.url} h="100%" border="1px solid" />
              <Image src={elem.url1} h="100%" border="1px solid" />
              <Box>
                <Heading>{elem.title}</Heading>
                <Text>{elem.main}</Text>
                <Text>{elem.type}</Text>
                <Text>{elem.equipment}</Text>
              </Box>
            </Flex>
            <Spacer />
            <Button
              mr="20px"
              bg="#2196f3"
              color="white"
              _hover={{ bg: "#2196f3" }}
            >
              View History
            </Button>
          </Flex>
        ))}
      <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        total={5}
      />
    </Box>
  );
}
