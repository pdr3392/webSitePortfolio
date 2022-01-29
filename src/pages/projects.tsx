import {
  Box,
  Flex,
  IconButton,
  VStack,
  Link as ChakraLink,
  HStack,
  Center,
  Button,
  Text,
} from "@chakra-ui/react";
import WorkList from "../components/WorkList";
import Link from "next/link";
import { ArrowBackIcon } from "@chakra-ui/icons";
import WorkNavigator from "../components/WorkNavigator";
import { useSelector, useDispatch } from "react-redux";
import { changeWork } from "../redux/work";
import { useEffect } from "react";

interface WorkStateProps {
  work: {
    navState: string;
  };
}

export default function Projects() {
  const work = useSelector<WorkStateProps>((state) => state.work.navState);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(work);
  }, [work]);

  return (
    <Flex w="100vw" h="100vh" position="relative" overflow="hidden">
      <Link href={`/`} passHref>
        <ChakraLink style={{ textDecoration: "none" }}>
          <Box position="absolute" left="5rem" top="2rem">
            <IconButton
              bgColor="transparent"
              color="gray.200"
              cursor="pointer"
              _hover={{
                bgColor: "transparent",
                color: "red.500",
              }}
              aria-label="backward"
              icon={<ArrowBackIcon h="20px" w="20px" />}
            />
          </Box>
        </ChakraLink>
      </Link>

      <VStack mt="5rem" ml="6rem">
        <HStack spacing="10">
          <WorkList />
        </HStack>
      </VStack>

      <Box h="100%" top="0" w="900px" position="absolute" right="0">
        <Box bgColor="red.500" h="100%" w="100%" position="relative">
          <WorkNavigator />
        </Box>
      </Box>
    </Flex>
  );
}
