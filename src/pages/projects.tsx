import {
  Box,
  Flex,
  IconButton,
  VStack,
  Link as ChakraLink,
  HStack,
  Center,
  Button,
} from "@chakra-ui/react";
import WorkList from "../components/WorkList";
import Link from "next/link";
import { ArrowBackIcon } from "@chakra-ui/icons";
import WorkNavigator from "../components/WorkNavigator";

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
          <WorkList />
        </HStack>
      </VStack>

      <Flex position="relative" right="0" top="2rem">
        <Center h="100%" w="100%">
          <HStack spacing="14" zIndex="3" position="absolute" top="8rem">
            <Button
              fontFamily=" PlayFair Display"
              fontStyle="italic"
              fontWeight="400"
              colorScheme="gray"
              variant="outline"
            >
              info
            </Button>
            <Button
              fontFamily=" PlayFair Display"
              fontStyle="italic"
              fontWeight="400"
              colorScheme="gray"
              variant="outline"
            >
              live view
            </Button>
          </HStack>
          <Box h="422px" w="825px" zIndex="2">
            <WorkNavigator />
          </Box>
          <Box
            zIndex="1"
            position="absolute"
            borderRadius="100%"
            h="38rem"
            w="38rem"
            bgColor="red.500"
          />
        </Center>
      </Flex>
    </Flex>
  );
}
