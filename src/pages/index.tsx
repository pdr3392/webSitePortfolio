import {
  Divider,
  Center,
  Flex,
  Text,
  Box,
  VStack,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";

export default function Index() {
  return (
    <Flex w="100vw" h="100vh" position="relative" overflow="hidden">
      <Flex h="7rem" overflow="hidden">
        <VStack h="100%" mt="4rem" spacing="1rem">
          <HStack w="100%" align="flex-start" ml="5rem" spacing="24">
            <Text
              color="gray.200"
              _hover={{
                color: "red.500",
                cursor: "pointer",
              }}
              fontFamily="PlayFair Display"
              fontSize="1.125rem"
            >
              EMAIL ME
            </Text>
            <Text
              color="gray.200"
              _hover={{
                color: "red.500",
                cursor: "pointer",
              }}
              fontFamily="PlayFair Display"
              fontSize="1.125rem"
            >
              INSTAGRAM
            </Text>
            <Text
              color="gray.200"
              _hover={{
                color: "red.500",
                cursor: "pointer",
              }}
              fontFamily="PlayFair Display"
              fontSize="1.125rem"
            >
              GITHUB
            </Text>
            <Text
              color="gray.200"
              _hover={{
                color: "red.500",
                cursor: "pointer",
              }}
              fontFamily="PlayFair Display"
              fontSize="1.125rem"
            >
              LINKEDIN
            </Text>
            <Text
              color="gray.200"
              _hover={{
                color: "red.500",
                cursor: "pointer",
              }}
              fontFamily="PlayFair Display"
              fontSize="1.125rem"
            >
              UPWORK
            </Text>
            <Text
              color="gray.200"
              _hover={{
                color: "red.500",
                cursor: "pointer",
              }}
              fontFamily="PlayFair Display"
              fontSize="1.125rem"
            >
              PROJECTS
            </Text>
          </HStack>
          <Box alignSelf="flex-end" h="5px" w="100vw" bgColor="red.500"></Box>
        </VStack>
        <Box position="absolute" top="3rem" right="1rem">
          <ReactCountryFlag
            style={{
              marginRight: "2rem",
              width: "40px",
              objectFit: "cover",
              borderRadius: "100%",
              height: "40px",
            }}
            className="emojiFlag"
            countryCode="BR"
            svg
            aria-label="pt-BR"
          />
          <ReactCountryFlag
            style={{
              marginRight: "2rem",
              width: "40px",
              objectFit: "cover",
              borderRadius: "100%",
              height: "40px",
            }}
            className="emojiFlag"
            countryCode="US"
            svg
            aria-label="en-US"
          />
        </Box>
      </Flex>

      <Grid
        zIndex="3"
        position="absolute"
        top="20vh"
        left="20vw"
        templateColumns="repeat(5, 1fr)"
        templateRows="repeat(5, 1fr)"
        gap={0}
      >
        <GridItem gridArea="grid-area: 4 / 1 / 6 / 6">
          <Text>import</Text>
        </GridItem>
        <GridItem gridArea="grid-area: 1 / 1 / 4 / 4">
          <Box bgColor="gray.200" w="100%" h="100%" />
        </GridItem>
        <GridItem gridArea="grid-area: 1 / 4 / 4 / 6">
          <Box bgColor="gray.200" w="100%" h="100%" />
        </GridItem>
      </Grid>

      <Center zIndex="2" position="absolute" h="100vh" w="100vw" mt="5rem">
        <Box borderRadius="100%" h="31.25rem" w="31.25rem" bgColor="red.500" />
      </Center>
    </Flex>
  );
}
