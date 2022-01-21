import {
  Divider,
  Center,
  Flex,
  Text,
  Box,
  VStack,
  HStack,
  Grid,
  Link as ChakraLink,
  GridItem,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";
import CodeHero from "../components/CodeHero";
import { SiTypescript, SiJavascript, SiPython } from "react-icons/si";

export default function Index() {
  return (
    <Flex w="100vw" h="100vh" position="relative" overflow="hidden">
      <Flex h="7rem" overflow="hidden">
        <VStack h="100%" mt="4rem" spacing="1rem">
          <HStack w="100%" align="flex-start" ml="5rem" spacing="24">
            <Text
              color="gray.200"
              cursor="pointer"
              _hover={{
                color: "red.500",
              }}
              fontFamily="PlayFair Display"
              fontSize="1.125rem"
            >
              EMAIL ME
            </Text>
            <Text
              color="gray.200"
              cursor="pointer"
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
              cursor="pointer"
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
              cursor="pointer"
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
              cursor="pointer"
              _hover={{
                color: "red.500",
                cursor: "pointer",
              }}
              fontFamily="PlayFair Display"
              fontSize="1.125rem"
            >
              UPWORK
            </Text>
            <Link href={`/projects`} passHref>
              <ChakraLink style={{ textDecoration: "none" }}>
                <Text
                  color="gray.200"
                  cursor="pointer"
                  _hover={{
                    color: "red.500",
                    cursor: "pointer",
                  }}
                  fontFamily="PlayFair Display"
                  fontSize="1.125rem"
                >
                  PROJECTS
                </Text>
              </ChakraLink>
            </Link>
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

      <VStack position="absolute" zIndex="3" top="20vh" left="10vw">
        <HStack spacing="28">
          <Box w="760px" h="300px">
            <CodeHero />
          </Box>

          <Box w="340px" h="330px">
            <VStack spacing="4">
              <Image src="/images/profile.png" height="140px" width="140px" />

              <Text
                w="75%"
                fontSize=".8rem"
                textJustify="inter-word"
                textAlign="justify"
                fontFamily="Playfair Display"
                color="gray.200"
              >
                developing film since 2021, shoothing photography since 2012,
                developing software since 2020, mentally affected* by journalism
                college since 2014
                <br />
                <br />
                *in a good way
              </Text>

              <HStack spacing="10">
                <SiTypescript color="#AAAAAA" size="35px" />
                <SiJavascript color="#AAAAAA" size="35px" />
                <SiPython color="#AAAAAA" size="35px" />
              </HStack>
            </VStack>
          </Box>
        </HStack>
        <HStack spacing="0" w="1080px" h="285px">
          <Image src="/images/home1.png" height="285px" width="270" priority />
          <Image src="/images/home2.png" height="285px" width="270" priority />
          <Image src="/images/home3.png" height="285px" width="270" priority />
          <Image src="/images/home4.png" height="285px" width="270" priority />
        </HStack>
      </VStack>

      <Center zIndex="2" position="absolute" h="100vh" w="100vw" mt="5rem">
        <Box borderRadius="100%" h="38rem" w="38rem" bgColor="red.500" />
      </Center>
    </Flex>
  );
}
