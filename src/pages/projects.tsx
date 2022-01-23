import {
  Box,
  Flex,
  IconButton,
  Text,
  VStack,
  Link as ChakraLink,
  HStack,
} from "@chakra-ui/react";
import WorkList from "../components/workList";
import Link from "next/link";
import { ArrowBackIcon } from "@chakra-ui/icons";
import WorkItemTest from "../components/WorkItemTest";

export default function Projects() {
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
          <WorkItemTest />
        </HStack>
      </VStack>

      <Flex position="absolute" right="12rem" top="8rem">
        <Box borderRadius="100%" h="38rem" w="38rem" bgColor="red.500" />
      </Flex>
    </Flex>
  );
}
